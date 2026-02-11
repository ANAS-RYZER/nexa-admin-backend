import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
export type RiskFactorDocument = HydratedDocument<RiskFactor>;
export declare class RiskFactor extends Document {
    assetId: MongooseSchema.Types.ObjectId;
    issuerId: MongooseSchema.Types.ObjectId;
    name: string;
    description: string;
}
export declare const RiskFactorSchema: MongooseSchema<RiskFactor, import("mongoose").Model<RiskFactor, any, any, any, Document<unknown, any, RiskFactor, any, {}> & RiskFactor & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, RiskFactor, Document<unknown, {}, import("mongoose").FlatRecord<RiskFactor>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<RiskFactor> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
