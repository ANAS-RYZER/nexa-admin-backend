import { Model, Types } from 'mongoose';
import { assetApproval, AssetApprovalDocument } from './schemas/assetApproval.schema';
import { AssetDocument } from '../assets/schemas/asset.schema';
import { AssetApprovalPaginationDto } from './dto/asset-approval-pagination.dto';
import { UpdateAssetApprovalDto } from './dto/update-asset-approval.dto';
export declare class AssetApprovalService {
    private readonly assetApprovalModel;
    private readonly assetModel;
    constructor(assetApprovalModel: Model<AssetApprovalDocument>, assetModel: Model<AssetDocument>);
    getAll(query: AssetApprovalPaginationDto): Promise<{
        success: boolean;
        data: (import("mongoose").FlattenMaps<import("mongoose").Document<unknown, {}, assetApproval, {}, {}> & assetApproval & Required<{
            _id: Types.ObjectId;
        }> & {
            __v: number;
        }> & Required<{
            _id: Types.ObjectId;
        }>)[];
        pagination: {
            page: number;
            limit: number;
            currentPage: number;
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            totalCount: number;
            totalPages: number;
        };
    }>;
    updateAssetApproval(assetId: string, body: UpdateAssetApprovalDto): Promise<{
        success: boolean;
        message: string;
    }>;
}
