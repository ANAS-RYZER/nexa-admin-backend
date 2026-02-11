import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
export type ExitOpportunityDocument = HydratedDocument<ExitOpportunity>;
export declare class ExitOpportunity extends Document {
    assetId: MongooseSchema.Types.ObjectId;
    issuerId: MongooseSchema.Types.ObjectId;
    name: string;
    description: string;
}
export declare const ExitOpportunitySchema: MongooseSchema<ExitOpportunity, import("mongoose").Model<ExitOpportunity, any, any, any, Document<unknown, any, ExitOpportunity, any, {}> & ExitOpportunity & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, ExitOpportunity, Document<unknown, {}, import("mongoose").FlatRecord<ExitOpportunity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<ExitOpportunity> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
