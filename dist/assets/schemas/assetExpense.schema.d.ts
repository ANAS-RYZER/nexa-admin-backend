import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
export type AssetExpenseDocument = HydratedDocument<AssetExpense>;
export declare class AssetExpense extends Document {
    assetId: MongooseSchema.Types.ObjectId;
    issuerId: MongooseSchema.Types.ObjectId;
    name: string;
    isPercentage: boolean;
    value: number;
    status: boolean;
}
export declare const AssetExpenseSchema: MongooseSchema<AssetExpense, import("mongoose").Model<AssetExpense, any, any, any, Document<unknown, any, AssetExpense, any, {}> & AssetExpense & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AssetExpense, Document<unknown, {}, import("mongoose").FlatRecord<AssetExpense>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<AssetExpense> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
