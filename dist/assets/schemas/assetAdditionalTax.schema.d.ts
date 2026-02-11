import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
export type AdditionalTaxDocument = HydratedDocument<AdditionalTax>;
export declare class AdditionalTax extends Document {
    assetId: MongooseSchema.Types.ObjectId;
    issuerId: MongooseSchema.Types.ObjectId;
    name: string;
    value: number;
}
export declare const AdditionalTaxSchema: MongooseSchema<AdditionalTax, import("mongoose").Model<AdditionalTax, any, any, any, Document<unknown, any, AdditionalTax, any, {}> & AdditionalTax & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AdditionalTax, Document<unknown, {}, import("mongoose").FlatRecord<AdditionalTax>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<AdditionalTax> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
