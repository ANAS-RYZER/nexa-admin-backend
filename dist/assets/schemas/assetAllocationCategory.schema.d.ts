import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { VestingType } from "../interfaces/assetAllocationCategory.types";
export type AssetAllocationCategoryDocument = HydratedDocument<AssetAllocationCategory>;
export interface IAllocationTotals {
    percentage: number;
    tokens: number;
}
export interface IAllocationValidationResult {
    totalPercentage: number;
    totalTokens: number;
    remainingPercentage: number;
    remainingTokens: number;
    isValid: boolean;
}
export interface IAllocationStats {
    isValid: boolean;
    totalPercentage: number;
    totalTokens: number;
    remainingPercentage: number;
    remainingTokens: number;
}
export declare class AssetAllocationCategory extends Document {
    assetId: MongooseSchema.Types.ObjectId;
    issuerId: MongooseSchema.Types.ObjectId;
    category: string;
    percentage: number;
    tokens: number;
    vestingType: VestingType;
    vestingStartDate?: Date;
    vestingEndDate?: Date;
    cliffPeriod?: number;
    description?: string;
    isActive: boolean;
    vestingDuration?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const AssetAllocationCategorySchema: MongooseSchema<AssetAllocationCategory, import("mongoose").Model<AssetAllocationCategory, any, any, any, Document<unknown, any, AssetAllocationCategory, any, {}> & AssetAllocationCategory & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AssetAllocationCategory, Document<unknown, {}, import("mongoose").FlatRecord<AssetAllocationCategory>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<AssetAllocationCategory> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
