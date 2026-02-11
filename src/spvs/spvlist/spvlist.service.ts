import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { SPV, SPVDocument } from '../schemas/spv.schema';

@Injectable()
export class SpvService {
  constructor(
    @InjectModel(SPV.name)
    private readonly spvModel: Model<SPVDocument>,
  ) {}

  async getSpvById(spvId: string) {
    if (!Types.ObjectId.isValid(spvId)) {
      throw new NotFoundException('Invalid SPV ID');
    }

    const spv = await this.spvModel
      .findById(spvId)
      .lean()
      .exec();

    if (!spv) {
      throw new NotFoundException('SPV not found');
    }

    return {
      success: true,
      data: spv,
    };
  }
}
