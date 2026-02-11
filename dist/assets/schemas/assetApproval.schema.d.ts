import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { AssetStatus } from '../interfaces/asset.type';
export type AssetApprovalDocument = HydratedDocument<assetApproval>;
export declare class assetApproval extends Document {
    issuerId: MongooseSchema.Types.ObjectId;
    assetId: MongooseSchema.Types.ObjectId;
    issuername: string;
    assetName: string;
    status: AssetStatus;
    issuerComments?: string;
    adminComments?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const AssetApprovalSchema: MongooseSchema<assetApproval, import("mongoose").Model<assetApproval, any, any, any, Document<unknown, any, assetApproval, any, {}> & assetApproval & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, assetApproval, Document<unknown, {}, import("mongoose").FlatRecord<assetApproval>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<assetApproval> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
