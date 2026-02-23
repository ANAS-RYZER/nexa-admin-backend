import { SpvStatusService } from './spv.service';
import { SpvStatusPaginationDto } from './dto/spv-status-pagination.dto';
import { UpdateSpvStatusDto } from './dto/update-spv-status.dto';
export declare class SpvStatusController {
    private readonly spvStatusService;
    constructor(spvStatusService: SpvStatusService);
    getSpvStatusList(query: SpvStatusPaginationDto): Promise<{
        success: boolean;
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("./schemas/spvstatus.schema").spvStatus, {}, {}> & import("./schemas/spvstatus.schema").spvStatus & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, import("./schemas/spvstatus.schema").spvStatus, {}, {}> & import("./schemas/spvstatus.schema").spvStatus & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        })[];
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
