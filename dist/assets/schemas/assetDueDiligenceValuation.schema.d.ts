import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
export type AssetDueDiligenceValuationDocument = HydratedDocument<AssetDueDiligenceValuation>;
export declare class AssetDueDiligenceValuation extends Document {
    assetId: MongooseSchema.Types.ObjectId;
    issuerId: MongooseSchema.Types.ObjectId;
    name: string;
    logoUrl: string;
    location: string;
    link: string;
}
export declare const AssetDueDiligenceValuationSchema: MongooseSchema<AssetDueDiligenceValuation, import("mongoose").Model<AssetDueDiligenceValuation, any, any, any, Document<unknown, any, AssetDueDiligenceValuation, any, {}> & AssetDueDiligenceValuation & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AssetDueDiligenceValuation, Document<unknown, {}, import("mongoose").FlatRecord<AssetDueDiligenceValuation>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<AssetDueDiligenceValuation> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
