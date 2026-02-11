import { Document, HydratedDocument } from 'mongoose';
export type IssuerApplicationDocument = HydratedDocument<IssuerApplication>;
export declare enum AssetCategory {
    REAL_ESTATE = "Real Estate",
    COMMODITIES = "Commodities",
    COMPANY_EQUITY = "Company Equity",
    ART_COLLECTIBLES = "Art & Collectibles",
    INTELLECTUAL_PROPERTY = "Intellectual Property",
    OTHER = "Other"
}
export declare enum ApplicationStatus {
    PENDING = "pending",
    UNDER_REVIEW = "under_review",
    APPROVED = "approved",
    REJECTED = "rejected",
    REQUIRES_MORE_INFO = "requires_more_info"
}
export declare class IssuerApplication extends Document {
    applicationId: string;
    userId: string;
    email?: string;
    phoneNumber?: string;
    phoneCountryCode?: string;
    legalEntityName: string;
    countryOfIncorporation: string;
    assetCategory: AssetCategory;
    shortAssetDescription: string;
    status: ApplicationStatus;
    reviewedAt?: Date;
    reviewNotes?: string;
    rejectionReason?: string;
    metadata?: Record<string, any>;
    lastSeenByAdminAt?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export declare const IssuerApplicationSchema: import("mongoose").Schema<IssuerApplication, import("mongoose").Model<IssuerApplication, any, any, any, Document<unknown, any, IssuerApplication, any, {}> & IssuerApplication & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, IssuerApplication, Document<unknown, {}, import("mongoose").FlatRecord<IssuerApplication>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<IssuerApplication> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
