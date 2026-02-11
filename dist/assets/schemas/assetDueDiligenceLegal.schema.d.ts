import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
export type AssetDueDiligenceLegalDocument = HydratedDocument<AssetDueDiligenceLegal>;
export declare class AssetDueDiligenceLegal extends Document {
    assetId: MongooseSchema.Types.ObjectId;
    issuerId: MongooseSchema.Types.ObjectId;
    name: string;
    logoUrl: string;
    location: string;
    link: string;
}
export declare const AssetDueDiligenceLegalSchema: MongooseSchema<AssetDueDiligenceLegal, import("mongoose").Model<AssetDueDiligenceLegal, any, any, any, Document<unknown, any, AssetDueDiligenceLegal, any, {}> & AssetDueDiligenceLegal & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AssetDueDiligenceLegal, Document<unknown, {}, import("mongoose").FlatRecord<AssetDueDiligenceLegal>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<AssetDueDiligenceLegal> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
