import { IssuersService } from "./issuers.service";
import { UpdateApplicationStatusDto } from "./dto/updateApplicationStatus.dto";
import { Types } from "mongoose";
export declare class IssuersController {
    private readonly issuersService;
    constructor(issuersService: IssuersService);
    getIssuerApplicationList(): Promise<{
        success: boolean;
        data: import("./schemas/issuerApplication.schema").IssuerApplicationDocument[];
    }>;
    getOnboardedAssetsCount(issuerId: string): Promise<{
        success: boolean;
        data: {
            issuerId: string;
            count: number;
        };
    }>;
    getIssuerById(id: string): Promise<{
        success: boolean;
        data: {
            application: import("mongoose").FlattenMaps<import("mongoose").Document<unknown, {}, import("./schemas/issuerApplication.schema").IssuerApplication, {}, {}> & import("./schemas/issuerApplication.schema").IssuerApplication & Required<{
                _id: Types.ObjectId;
            }> & {
                __v: number;
            }> & Required<{
                _id: Types.ObjectId;
            }>;
            issuer: import("mongoose").FlattenMaps<import("mongoose").Document<unknown, {}, import("./schemas/issuer.schema").IssuerUser, {}, {}> & import("./schemas/issuer.schema").IssuerUser & Required<{
                _id: Types.ObjectId;
            }> & {
                __v: number;
            }> & Required<{
                _id: Types.ObjectId;
            }>;
            spvs: {
                id: string;
                name: string;
                status: import("../spvs/schemas/spv.schema").CompanyStatus;
                type: import("../spvs/schemas/spv.schema").SPVType;
                jurisdiction: string;
                formationDate: Date;
            }[];
        };
    }>;
    updateStatusApplication(id: string, body: UpdateApplicationStatusDto): Promise<{
        success: boolean;
        message: string;
    }>;
}
