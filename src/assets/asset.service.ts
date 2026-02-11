import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { assetApproval, AssetApprovalDocument } from './schemas/assetApproval.schema';
import { Asset, AssetDocument } from '../assets/schemas/asset.schema';
import { AssetApprovalPaginationDto } from './dto/asset-approval-pagination.dto';
import { UpdateAssetApprovalDto } from './dto/update-asset-approval.dto';
import { AssetStatus } from '../assets/interfaces/asset.type';

@Injectable()
export class AssetApprovalService {
  constructor(
    @InjectModel(assetApproval.name)
    private readonly assetApprovalModel: Model<AssetApprovalDocument>,

    @InjectModel(Asset.name)
    private readonly assetModel: Model<AssetDocument>,
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
  async updateAssetApproval(
    assetId: string,
    body: UpdateAssetApprovalDto,
  ) {
    const assetObjectId = new Types.ObjectId(assetId);

    // Find AssetApproval record
    const approvalRecord = await this.assetApprovalModel.findOne({
      assetId: assetObjectId,
    });

    if (!approvalRecord) {
      throw new NotFoundException('Asset approval record not found');
    }

    // Update AssetApproval (always)
    await this.assetApprovalModel.updateOne(
      { _id: approvalRecord._id },
      {
        status: body.status,
        adminComments: body.adminComments ?? null,
      },
    );

    // Update Asset status (Approved / Rejected)
    const assetUpdate = await this.assetModel.updateOne(
      { _id: assetObjectId },
      { status: body.status },
    );

    if (assetUpdate.matchedCount === 0) {
      throw new NotFoundException('Asset not found');
    }

    return {
      success: true,
      message:
        body.status === AssetStatus.APPROVED
          ? 'Asset approved successfully'
          : 'Asset rejected successfully',
    };
  }
}
