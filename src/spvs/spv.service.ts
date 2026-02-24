import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { spvStatus, SpvStatusDocument } from "./schemas/spvstatus.schema";
import { SpvStatusPaginationDto } from "./dto/spv-status-pagination.dto";
import { UpdateSpvStatusDto } from "./dto/update-spv-status.dto";
import { CompanyStatus } from "./schemas/spv.schema";
import { SPV, SPVDocument } from "./schemas/spv.schema";
import { EmailService } from "../infra/email/email.service";

@Injectable()
export class SpvStatusService {
  constructor(
    @InjectModel(spvStatus.name)
    private readonly spvStatusModel: Model<SpvStatusDocument>,

    @InjectModel(SPV.name)
    private readonly spvModel: Model<SPVDocument>,

    private readonly emailService: EmailService,
  ) {}

  async getAll(query: SpvStatusPaginationDto) {
    const page = query.page ?? 1;
    const limit = query.limit ?? 10;
    const skip = (page - 1) * limit;
    const filter: Record<string, any> = {};
    if (query.status) {
      filter.status = query.status;
    }

    const [data, totalCount] = await Promise.all([
      this.spvStatusModel
        .find(filter)
        .sort({ createdAt: -1 })
        .populate("spvId", "name userId blockchain") 
        .skip(skip)
        .limit(limit)
        .exec(),
      this.spvStatusModel.countDocuments(filter),
    ]);

    const totalPages = Math.ceil(totalCount / limit);

    return {
      success: true,
      data,
      pagination: {
        page,
        limit,
        currentPage: page,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
        totalCount,
        totalPages,
      },
    };
  }

  async updateSpvStatus(spvId: string, body: UpdateSpvStatusDto) {
    const spvStatusRecord = await this.spvStatusModel.findOne({ spvId });
    if (!spvStatusRecord) {
      throw new NotFoundException("SPV status record not found");
    }
    const updatedSpvStatus = await this.spvStatusModel.findByIdAndUpdate(
      spvStatusRecord._id,
      {
        $set: {
          status: body.status,
          adminComments: body.adminComments ?? null,
        },
      },
      { new: true },
    );

    if (!updatedSpvStatus) {
      throw new NotFoundException("Failed to update SPV status record");
    }
    // 3. Only update SPV if status is ACTIVE
    let spvUpdateResult = null;

    console.log("Updated SPV Status:", body);
    console.log("Updated SPV Block chain:", body.blockchain);

    if (updatedSpvStatus?.status === CompanyStatus.ACTIVE) {
      spvUpdateResult = await this.spvModel.findByIdAndUpdate(
        spvId,
        {
          status: body.status,
          blockchain: {
            spvAddress: body.blockchain?.spvAddress,
            daoAddress: body.blockchain?.daoAddress,
            txHash: body.blockchain?.txHash,
          },
        },

        { new: true },
      );

      if (!spvUpdateResult) {
        throw new NotFoundException("SPV record not found");
      }
    }

    // 4. Send email for ACTIVE or REJECTED
    if (
      updatedSpvStatus.status === CompanyStatus.ACTIVE ||
      updatedSpvStatus.status === CompanyStatus.REJECTED
    ) {
      await this.emailService.sendSpvStatusUpdateEmail(
        updatedSpvStatus.issueremail,
        {
          issuerName: updatedSpvStatus.issuername,
          spvName: updatedSpvStatus.spvname,
          status: updatedSpvStatus.status,
          adminComments: updatedSpvStatus.adminComments,
        },
      );
    }

    return {
      success: true,
      message:
        updatedSpvStatus.status === CompanyStatus.ACTIVE
          ? "SPV activated and updated successfully"
          : "SPV status updated successfully (SPV notupdated)",
    };
  }
}
