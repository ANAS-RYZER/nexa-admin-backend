import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AssetApprovalController } from './asset.controller';
import { AssetApprovalService } from './asset.service';

import {
  assetApproval,
  AssetApprovalSchema,
} from './schemas/assetApproval.schema';

import { Asset, AssetSchema } from '../assets/schemas/asset.schema';
import { SPV, SPVSchema } from '../spvs/schemas/spv.schema';
import  {AssetModule} from '../assets/assetlist/assetlist.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: assetApproval.name, schema: AssetApprovalSchema },
      { name: Asset.name, schema: AssetSchema },
      { name: SPV.name, schema: SPVSchema },
    ]),
      AssetModule,
  ],
  controllers: [AssetApprovalController],
  providers: [AssetApprovalService],
})
export class AssetApprovalModule {}
