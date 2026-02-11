import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
export type RiskDisclosureDocument = HydratedDocument<RiskDisclosure>;
export declare class RiskDisclosure extends Document {
    assetId: MongooseSchema.Types.ObjectId;
    issuerId: MongooseSchema.Types.ObjectId;
    name: string;
    description: string;
}
export declare const RiskDisclosureSchema: MongooseSchema<RiskDisclosure, import("mongoose").Model<RiskDisclosure, any, any, any, Document<unknown, any, RiskDisclosure, any, {}> & RiskDisclosure & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RiskDisclosure, Document<unknown, {}, import("mongoose").FlatRecord<RiskDisclosure>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<RiskDisclosure> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
