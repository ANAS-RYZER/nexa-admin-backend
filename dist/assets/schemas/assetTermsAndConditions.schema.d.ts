import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
export type AssetTermsAndConditionsDocument = HydratedDocument<AssetTermsAndConditions>;
export declare class AssetTermsAndConditions extends Document {
    assetId: MongooseSchema.Types.ObjectId;
    issuerId: MongooseSchema.Types.ObjectId;
    title: string;
    description: string;
}
export declare const AssetTermsAndConditionsSchema: MongooseSchema<AssetTermsAndConditions, import("mongoose").Model<AssetTermsAndConditions, any, any, any, Document<unknown, any, AssetTermsAndConditions, any, {}> & AssetTermsAndConditions & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AssetTermsAndConditions, Document<unknown, {}, import("mongoose").FlatRecord<AssetTermsAndConditions>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<AssetTermsAndConditions> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
