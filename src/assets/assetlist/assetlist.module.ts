import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AssetService } from './assetlist.service';
import { AssetController } from './assetlist.controller';

import { Asset, AssetSchema } from '../schemas/asset.schema';
import { SPV, SPVSchema } from '../../spvs/schemas/spv.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Asset.name, schema: AssetSchema },
      { name: SPV.name, schema: SPVSchema },
    ]),
  ],
  controllers: [AssetController],
  providers: [AssetService],
})
export class AssetModule {}
