import { Document, HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { TenantStatus, TenantType } from '../interfaces/assetTenant.types';
export type AssetTenantDocument = HydratedDocument<AssetTenant>;
export declare class AssetTenant extends Document {
    assetId: MongooseSchema.Types.ObjectId;
    issuerId: MongooseSchema.Types.ObjectId;
    name: string;
    rentPerSft: number;
    sftsAllocated: number;
    annualRentEscalation: number;
    startDate: Date;
    endDate: Date;
    status: TenantStatus;
    type: TenantType;
    lockInPeriod: number;
    leasePeriod: number;
    securityDeposit: number;
    interestOnSecurityDeposit: number;
    agreement?: {
        name: string | null;
        url: string | null;
    } | null;
    logo?: string | null;
}
export declare const AssetTenantSchema: MongooseSchema<AssetTenant, import("mongoose").Model<AssetTenant, any, any, any, Document<unknown, any, AssetTenant, any, {}> & AssetTenant & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, AssetTenant, Document<unknown, {}, import("mongoose").FlatRecord<AssetTenant>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<AssetTenant> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
