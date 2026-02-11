import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
export type FaqDocument = HydratedDocument<Faq>;
export declare class Faq extends Document {
    assetId: MongooseSchema.Types.ObjectId;
    issuerId: MongooseSchema.Types.ObjectId;
    question: string;
    answer: string;
}
export declare const FaqSchema: MongooseSchema<Faq, import("mongoose").Model<Faq, any, any, any, Document<unknown, any, Faq, any, {}> & Faq & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Faq, Document<unknown, {}, import("mongoose").FlatRecord<Faq>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<Faq> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
