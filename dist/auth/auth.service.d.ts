import { JwtService } from '@nestjs/jwt';
import { AdminService } from '../admin/admin.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private adminService;
    private jwtService;
    constructor(adminService: AdminService, jwtService: JwtService);
    register(registerDto: RegisterDto): Promise<{
        message: string;
        user: {
            id: import("mongoose").Types.ObjectId;
            email: string;
            firstName: string;
            lastName: string;
        };
        accessToken: string;
    }>;
    login(loginDto: LoginDto): Promise<{
        message: string;
        user: {
            id: import("mongoose").Types.ObjectId;
            email: string;
            firstName: string;
            lastName: string;
        };
        accessToken: string;
    }>;
    private generateToken;
}
