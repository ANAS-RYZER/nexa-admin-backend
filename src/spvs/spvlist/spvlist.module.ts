import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SPV, SPVSchema } from '../schemas/spv.schema';
import { SpvService } from './spvlist.service';
import { SpvController } from './spvlist.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SPV.name, schema: SPVSchema },
    ]),
  ],
  controllers: [SpvController],
  providers: [SpvService],
})
export class SpvModule {}
