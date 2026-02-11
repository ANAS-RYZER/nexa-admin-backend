import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { Response } from "express";
import { RegisterDto } from "./dto/register.dto";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto, res: Response): Promise<{
        message: string;
        user: {
            id: import("mongoose").Types.ObjectId;
            email: string;
            firstName: string;
            lastName: string;
        };
    }>;
    login(loginDto: LoginDto, res: Response): Promise<{
        message: string;
        user: {
            id: import("mongoose").Types.ObjectId;
            email: string;
            firstName: string;
            lastName: string;
        };
        accessToken: string;
    }>;
    getProfile(req: any): {
        message: string;
        user: any;
    };
}
