import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SpvStatusController } from './spv.controller';
import { SpvStatusService } from './spv.service';

import { spvStatus, SpvStatusSchema } from './schemas/spvstatus.schema';
import { SPV, SPVSchema } from './schemas/spv.schema';
import { SpvModule } from './spvlist/spvlist.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: spvStatus.name, schema: SpvStatusSchema },
      { name: SPV.name, schema: SPVSchema },
    ]),
    SpvModule, 
  ],
  controllers: [SpvStatusController],
  providers: [SpvStatusService],
})
export class SpvStatusModule {}
