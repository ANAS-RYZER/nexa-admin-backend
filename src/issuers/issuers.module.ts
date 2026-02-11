import { Module } from "@nestjs/common";
import { IssuersService } from "./issuers.service";
import { IssuersController } from "./issuers.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { IssuerUser, IssuerUserSchema } from "./schemas/issuer.schema";
import { IssuerApplication, IssuerApplicationSchema } from "./schemas/issuerApplication.schema";
import { Asset, AssetSchema } from "../assets/schemas/asset.schema";
import { SPV, SPVSchema } from "../spvs/schemas/spv.schema";

@Module({
  controllers: [IssuersController],
  providers: [IssuersService],
  imports: [
    MongooseModule.forFeature([
      { name: IssuerUser.name, schema: IssuerUserSchema },
      { name: IssuerApplication.name, schema: IssuerApplicationSchema },
      { name: Asset.name, schema: AssetSchema },
      { name: SPV.name, schema: SPVSchema },
    ]),
  ],
})
export class IssuersModule {}
