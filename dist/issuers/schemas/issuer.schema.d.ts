import { Document, HydratedDocument } from 'mongoose';
export type IssuerUserDocument = HydratedDocument<IssuerUser>;
export declare enum KYCStatus {
    PENDING = "pending",
    APPROVED = "approved",
    REJECTED = "rejected"
}
export declare class IssuerUser extends Document {
    email: string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    metadata?: Record<string, any>;
    kycStatus?: KYCStatus;
    createdAt: Date;
    updatedAt: Date;
}
export declare const IssuerUserSchema: import("mongoose").Schema<IssuerUser, import("mongoose").Model<IssuerUser, any, any, any, Document<unknown, any, IssuerUser, any, {}> & IssuerUser & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IssuerUser, Document<unknown, {}, import("mongoose").FlatRecord<IssuerUser>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<IssuerUser> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
