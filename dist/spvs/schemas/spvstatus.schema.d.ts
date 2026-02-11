import { CompanyStatus } from "./spv.schema";
import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
export type SpvStatusDocument = HydratedDocument<spvStatus>;
export declare class spvStatus extends Document {
    issuerId: MongooseSchema.Types.ObjectId;
    spvId: MongooseSchema.Types.ObjectId;
    issuername: string;
    spvname: string;
    status: CompanyStatus;
    issuerComments?: string;
    adminComments?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const SpvStatusSchema: MongooseSchema<spvStatus, import("mongoose").Model<spvStatus, any, any, any, Document<unknown, any, spvStatus, any, {}> & spvStatus & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, spvStatus, Document<unknown, {}, import("mongoose").FlatRecord<spvStatus>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<spvStatus> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
