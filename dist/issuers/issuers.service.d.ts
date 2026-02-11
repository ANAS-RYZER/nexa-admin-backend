import { IssuerUser, IssuerUserDocument } from "./schemas/issuer.schema";
import { Model, Types } from "mongoose";
import { IssuerApplication, IssuerApplicationDocument } from "./schemas/issuerApplication.schema";
export declare class IssuersService {
    private issuerUserModel;
    private issuerApplicationModel;
    constructor(issuerUserModel: Model<IssuerUserDocument>, issuerApplicationModel: Model<IssuerApplicationDocument>);
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
        };
    }>;
    updateStatusApplication(id: string, status: "pending" | "approved" | "rejected"): Promise<{
        success: boolean;
        message: string;
    }>;
}
