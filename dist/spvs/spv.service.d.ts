import { Model } from 'mongoose';
import { spvStatus, SpvStatusDocument } from './schemas/spvstatus.schema';
import { SpvStatusPaginationDto } from './dto/spv-status-pagination.dto';
import { UpdateSpvStatusDto } from './dto/update-spv-status.dto';
import { SPVDocument } from './schemas/spv.schema';
export declare class SpvStatusService {
    private readonly spvStatusModel;
    private readonly spvModel;
    constructor(spvStatusModel: Model<SpvStatusDocument>, spvModel: Model<SPVDocument>);
    getAll(query: SpvStatusPaginationDto): Promise<{
        success: boolean;
        data: (import("mongoose").FlattenMaps<import("mongoose").Document<unknown, {}, spvStatus, {}, {}> & spvStatus & Required<{
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
    updateSpvStatus(spvId: string, body: UpdateSpvStatusDto): Promise<{
        success: boolean;
        message: string;
    }>;
}
