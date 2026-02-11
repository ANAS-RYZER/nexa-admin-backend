import { Model } from 'mongoose';
import { AdminDocument } from './schemas/admin.schema';
import { CreateUserDto } from './dto/create-user.dto';
export declare class AdminService {
    private adminModel;
    constructor(adminModel: Model<AdminDocument>);
    create(createUserDto: CreateUserDto): Promise<AdminDocument>;
    findByEmail(email: string): Promise<AdminDocument | null>;
    findById(id: string): Promise<AdminDocument | null>;
    updateLastLogin(id: string): Promise<void>;
}
