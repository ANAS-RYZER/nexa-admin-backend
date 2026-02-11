import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
export type AssetAmenityDocument = HydratedDocument<AssetAmenity>;
export declare class AssetAmenity extends Document {
    assetId: MongooseSchema.Types.ObjectId;
    issuerId: MongooseSchema.Types.ObjectId;
    name: string;
    description?: string;
    image: string;
    status: boolean;
    createdAt?: Date;
}
export declare const AssetAmenitySchema: MongooseSchema<AssetAmenity, import("mongoose").Model<AssetAmenity, any, any, any, Document<unknown, any, AssetAmenity, any, {}> & AssetAmenity & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AssetAmenity, Document<unknown, {}, import("mongoose").FlatRecord<AssetAmenity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<AssetAmenity> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
