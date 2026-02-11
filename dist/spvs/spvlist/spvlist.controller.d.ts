import { SpvService } from './spvlist.service';
export declare class SpvController {
    private readonly spvService;
    constructor(spvService: SpvService);
    getSpvById(spvId: string): Promise<{
        success: boolean;
        data: import("mongoose").FlattenMaps<import("mongoose").Document<unknown, {}, import("../schemas/spv.schema").SPV, {}, {}> & import("../schemas/spv.schema").SPV & Required<{
            _id: import("mongoose").Types.ObjectId;
        }> & {
            __v: number;
        }> & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
}
