import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AdminDocument, Admin } from './schemas/admin.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin.name) private adminModel: Model<AdminDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<AdminDocument> {
    const existingUser = await this.adminModel.findOne({ email: createUserDto.email });
    
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const user = new this.adminModel(createUserDto);
    return user.save();
  }

  async findByEmail(email: string): Promise<AdminDocument | null> {
    return this.adminModel.findOne({ email: email.toLowerCase() });
  }

  async findById(id: string): Promise<AdminDocument | null> {
    return this.adminModel.findById(id);
  }

  async updateLastLogin(id: string): Promise<void> {
    await this.adminModel.findByIdAndUpdate(id, { lastLoginAt: new Date() });
  }
}

