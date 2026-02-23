import { Model } from "mongoose";
import { spvStatus, SpvStatusDocument } from "./schemas/spvstatus.schema";
import { SpvStatusPaginationDto } from "./dto/spv-status-pagination.dto";
import { UpdateSpvStatusDto } from "./dto/update-spv-status.dto";
import { SPVDocument } from "./schemas/spv.schema";
import { EmailService } from "../infra/email/email.service";
export declare class SpvStatusService {
    private readonly spvStatusModel;
    private readonly spvModel;
    private readonly emailService;
    constructor(spvStatusModel: Model<SpvStatusDocument>, spvModel: Model<SPVDocument>, emailService: EmailService);
    getAll(query: SpvStatusPaginationDto): Promise<{
        success: boolean;
        data: (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, spvStatus, {}, {}> & spvStatus & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        }, {}, {}> & import("mongoose").Document<unknown, {}, spvStatus, {}, {}> & spvStatus & Required<{
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
