import { Model, Types } from 'mongoose';
import { SPV, SPVDocument } from '../schemas/spv.schema';
export declare class SpvService {
    private readonly spvModel;
    constructor(spvModel: Model<SPVDocument>);
    getSpvById(spvId: string): Promise<{
        success: boolean;
        data: import("mongoose").FlattenMaps<import("mongoose").Document<unknown, {}, SPV, {}, {}> & SPV & Required<{
            _id: Types.ObjectId;
        }> & {
            __v: number;
        }> & Required<{
            _id: Types.ObjectId;
        }>;
    }>;
}
