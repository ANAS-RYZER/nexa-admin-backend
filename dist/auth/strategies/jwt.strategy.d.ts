import { Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { AdminService } from "../../admin/admin.service";
export interface JwtPayload {
    sub: string;
    email: string;
}
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private adminService;
    constructor(configService: ConfigService, adminService: AdminService);
    validate(payload: JwtPayload): Promise<{
        id: string;
        email: string;
        firstName: string;
        lastName: string;
    }>;
}
export {};
