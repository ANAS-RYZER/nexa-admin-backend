import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";

import {
  assetApproval,
  AssetApprovalDocument,
} from "./schemas/assetApproval.schema";
import { Asset, AssetDocument } from "../assets/schemas/asset.schema";
import { AssetApprovalPaginationDto } from "./dto/asset-approval-pagination.dto";
import { UpdateAssetApprovalDto } from "./dto/update-asset-approval.dto";
import { AssetStatus } from "../assets/interfaces/asset.type";
import { EmailService } from "../infra/email/email.service";

@Injectable()
export class AssetApprovalService {
  constructor(
    @InjectModel(assetApproval.name)
    private readonly assetApprovalModel: Model<AssetApprovalDocument>,

    @InjectModel(Asset.name)
    private readonly assetModel: Model<AssetDocument>,

    private readonly emailService: EmailService,
  ) {}

  // ============================
  // GET LIST WITH PAGINATION + FILTER
  // ============================
  async getAll(query: AssetApprovalPaginationDto) {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const skip = (page - 1) * limit;

    const filter: Record<string, any> = {};
    if (query.status) {
      filter.status = query.status;
    }

    const [data, totalCount] = await Promise.all([
      this.assetApprovalModel
        .find(filter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean()
        .exec(),

      this.assetApprovalModel.countDocuments(filter),
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

  // ============================
  // APPROVE / REJECT ASSET
  // ============================
  async updateAssetApproval(assetId: string, body: UpdateAssetApprovalDto) {
    const assetObjectId = new Types.ObjectId(assetId);

    // Find AssetApproval record
    const approvalRecord = await this.assetApprovalModel.findOne({
      assetId: assetObjectId,
    });

    if (!approvalRecord) {
      throw new NotFoundException("Asset approval record not found");
    }

    // Update AssetApproval (always)
    const updatedAssetApproval =
      await this.assetApprovalModel.findByIdAndUpdate(
        approvalRecord._id,
        {
          status: body.status,
          adminComments: body.adminComments ?? null,
        },
        { new: true },
      );

    if (!updatedAssetApproval) {
      throw new NotFoundException("Failed to update Asset approval record");
    }

    let assetUpdateResult = null;

    if (updatedAssetApproval?.status === AssetStatus.APPROVED) {
      assetUpdateResult = await this.assetModel.findByIdAndUpdate(
        assetObjectId,
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
    }
    if (!assetUpdateResult) {
      throw new NotFoundException("Failed to update Asset record");
    }
    // Update Asset status (Approved / Rejected)

    // Send email notification to issuer when asset is approved or rejected
    if (
      body.status === AssetStatus.APPROVED ||
      body.status === AssetStatus.REJECTED
    ) {
      await this.emailService.sendAssetStatusUpdateEmail(
        approvalRecord.issueremail,
        {
          issuerName: approvalRecord.issuername,
          assetName: approvalRecord.assetName,
          status: body.status,
          adminComments: body.adminComments,
        },
      );
    }

    return {
      success: true,
      message:
        body.status === AssetStatus.APPROVED
          ? "Asset approved successfully"
          : "Asset rejected successfully",
    };
  }
}
