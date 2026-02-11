import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
export type AssetFeatureDocument = HydratedDocument<AssetFeature>;
export declare class AssetFeature extends Document {
    assetId: MongooseSchema.Types.ObjectId;
    issuerId: MongooseSchema.Types.ObjectId;
    name: string;
    description?: string;
    image: string;
    status: boolean;
    createdAt?: Date;
}
export declare const AssetFeatureSchema: MongooseSchema<AssetFeature, import("mongoose").Model<AssetFeature, any, any, any, Document<unknown, any, AssetFeature, any, {}> & AssetFeature & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AssetFeature, Document<unknown, {}, import("mongoose").FlatRecord<AssetFeature>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<AssetFeature> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
