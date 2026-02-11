import { AssetApprovalService } from './asset.service';
import { AssetApprovalPaginationDto } from './dto/asset-approval-pagination.dto';
import { UpdateAssetApprovalDto } from './dto/update-asset-approval.dto';
export declare class AssetApprovalController {
    private readonly assetApprovalService;
    constructor(assetApprovalService: AssetApprovalService);
    getAssetApprovalList(query: AssetApprovalPaginationDto): Promise<{
        success: boolean;
        data: (import("mongoose").FlattenMaps<import("mongoose").Document<unknown, {}, import("./schemas/assetApproval.schema").assetApproval, {}, {}> & import("./schemas/assetApproval.schema").assetApproval & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        }> & Required<{
            _id: import("mongoose").Types.ObjectId;
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
