import { IssuerUser, IssuerUserDocument } from "./schemas/issuer.schema";
import { Model, Types } from "mongoose";
import { IssuerApplication, IssuerApplicationDocument } from "./schemas/issuerApplication.schema";
import { CompanyStatus, SPVType, SPVDocument } from "src/spvs/schemas/spv.schema";
import { AssetDocument } from "../assets/schemas/asset.schema";
export declare class IssuersService {
    private issuerUserModel;
    private issuerApplicationModel;
    private assetModel;
    private spvModel;
    constructor(issuerUserModel: Model<IssuerUserDocument>, issuerApplicationModel: Model<IssuerApplicationDocument>, assetModel: Model<AssetDocument>, spvModel: Model<SPVDocument>);
    getIssuerApplicationList(): Promise<{
        success: boolean;
        data: IssuerApplicationDocument[];
    }>;
    getIssuerById(id: string): Promise<{
        success: boolean;
        data: {
            application: import("mongoose").FlattenMaps<import("mongoose").Document<unknown, {}, IssuerApplication, {}, {}> & IssuerApplication & Required<{
                _id: Types.ObjectId;
            }> & {
                __v: number;
            }> & Required<{
                _id: Types.ObjectId;
            }>;
            issuer: import("mongoose").FlattenMaps<import("mongoose").Document<unknown, {}, IssuerUser, {}, {}> & IssuerUser & Required<{
                _id: Types.ObjectId;
            }> & {
                __v: number;
            }> & Required<{
                _id: Types.ObjectId;
            }>;
            spvs: {
                id: string;
                name: string;
                status: CompanyStatus;
                type: SPVType;
                jurisdiction: string;
                formationDate: Date;
            }[];
        };
    }>;
    updateStatusApplication(id: string, status: "pending" | "approved" | "rejected"): Promise<{
        success: boolean;
        message: string;
    }>;
    getIssuerSpvs(issuerId: string): Promise<{
        success: boolean;
        data: {
            id: string;
            name: string;
            status: CompanyStatus;
            type: SPVType;
            jurisdiction: string;
            formationDate: Date;
        }[];
    }>;
    getOnboardedAssetsCount(issuerId: string): Promise<{
        success: boolean;
        data: {
            issuerId: string;
            count: number;
        };
    }>;
}
