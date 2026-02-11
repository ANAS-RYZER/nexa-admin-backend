import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
export type AssetDueDiligenceStructureDocument = HydratedDocument<AssetDueDiligenceStructure>;
export declare class AssetDueDiligenceStructure extends Document {
    assetId: MongooseSchema.Types.ObjectId;
    issuerId: MongooseSchema.Types.ObjectId;
    name: string;
    logoUrl: string;
    location: string;
    link: string;
}
export declare const AssetDueDiligenceStructureSchema: MongooseSchema<AssetDueDiligenceStructure, import("mongoose").Model<AssetDueDiligenceStructure, any, any, any, Document<unknown, any, AssetDueDiligenceStructure, any, {}> & AssetDueDiligenceStructure & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AssetDueDiligenceStructure, Document<unknown, {}, import("mongoose").FlatRecord<AssetDueDiligenceStructure>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<AssetDueDiligenceStructure> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
