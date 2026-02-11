import { IssuersService } from "./issuers.service";
import { UpdateApplicationStatusDto } from "./dto/updateApplicationStatus.dto";
export declare class IssuersController {
    private readonly issuersService;
    constructor(issuersService: IssuersService);
    getIssuerApplicationList(): Promise<{
        success: boolean;
        data: import("./schemas/issuerApplication.schema").IssuerApplicationDocument[];
    }>;
    getIssuerById(id: string): Promise<{
        success: boolean;
        data: {
            application: import("mongoose").FlattenMaps<import("mongoose").Document<unknown, {}, import("./schemas/issuerApplication.schema").IssuerApplication, {}, {}> & import("./schemas/issuerApplication.schema").IssuerApplication & Required<{
                _id: import("mongoose").Types.ObjectId;
            }> & {
                __v: number;
            }> & Required<{
                _id: import("mongoose").Types.ObjectId;
            }>;
            issuer: import("mongoose").FlattenMaps<import("mongoose").Document<unknown, {}, import("./schemas/issuer.schema").IssuerUser, {}, {}> & import("./schemas/issuer.schema").IssuerUser & Required<{
                _id: import("mongoose").Types.ObjectId;
            }> & {
                __v: number;
            }> & Required<{
                _id: import("mongoose").Types.ObjectId;
            }>;
        };
    }>;
    updateStatusApplication(id: string, body: UpdateApplicationStatusDto): Promise<{
        success: boolean;
        message: string;
    }>;
}
