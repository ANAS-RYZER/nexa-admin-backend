import { Injectable, NotFoundException  } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { spvStatus, SpvStatusDocument } from './schemas/spvstatus.schema';
import { SpvStatusPaginationDto } from './dto/spv-status-pagination.dto';
import { UpdateSpvStatusDto } from './dto/update-spv-status.dto';
import { CompanyStatus } from './schemas/spv.schema';
import { SPV, SPVDocument } from './schemas/spv.schema';


@Injectable()
export class SpvStatusService {
  constructor(
    @InjectModel(spvStatus.name)
    private readonly spvStatusModel: Model<SpvStatusDocument>,

    @InjectModel(SPV.name)
    private readonly spvModel: Model<SPVDocument>, 
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
        .skip(skip)
        .limit(limit)
        .lean()
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
    //  Find SPVStatus record
    const spvStatusRecord = await this.spvStatusModel.findOne({ spvId });
    if (!spvStatusRecord) {
      throw new NotFoundException('SPV status record not found');
    }

    //  Update SPVStatus record (always)
    await this.spvStatusModel.updateOne(
      { _id: spvStatusRecord._id },
      {
        status: body.status,
        adminComments: body.adminComments ?? null,
      },
    );

    // Update SPV model status (for both Active and Rejected)
    const spvUpdateResult = await this.spvModel.updateOne(
      { _id: spvId },
      { status: body.status },
    );

    if (spvUpdateResult.matchedCount === 0) {
      throw new NotFoundException('SPV record not found');
    }

    return {
      success: true,
      message:
        body.status === CompanyStatus.ACTIVE
          ? 'SPV activated successfully'
          : 'SPV rejected successfully',
    };
  }
}


