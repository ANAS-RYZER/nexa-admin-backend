import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
export type AssetDocumentDoc = HydratedDocument<AssetDoc>;
export declare class AssetDoc extends Document {
    assetId: MongooseSchema.Types.ObjectId;
    issuerId: MongooseSchema.Types.ObjectId;
    name: string;
    description: string;
    type: string;
    format?: string | null;
    document?: {
        name: string | null;
        url: string | null;
    } | null;
    isProtected: boolean;
    isActive: boolean;
}
export declare const AssetDocumentSchema: MongooseSchema<AssetDoc, import("mongoose").Model<AssetDoc, any, any, any, Document<unknown, any, AssetDoc, any, {}> & AssetDoc & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AssetDoc, Document<unknown, {}, import("mongoose").FlatRecord<AssetDoc>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<AssetDoc> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
