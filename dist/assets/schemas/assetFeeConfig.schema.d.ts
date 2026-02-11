import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { FeeType } from '../interfaces/assetFeeConfig.types';
export type AssetFeeConfigDocument = HydratedDocument<AssetFeeConfig>;
export declare class AssetFeeConfig extends Document {
    assetId: MongooseSchema.Types.ObjectId;
    issuerId: MongooseSchema.Types.ObjectId;
    type: FeeType;
    name: string;
    value: number;
    isPercentage: boolean;
    status: boolean;
}
export declare const AssetFeeConfigSchema: MongooseSchema<AssetFeeConfig, import("mongoose").Model<AssetFeeConfig, any, any, any, Document<unknown, any, AssetFeeConfig, any, {}> & AssetFeeConfig & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AssetFeeConfig, Document<unknown, {}, import("mongoose").FlatRecord<AssetFeeConfig>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<AssetFeeConfig> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
