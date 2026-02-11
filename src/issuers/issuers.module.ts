import { Module } from "@nestjs/common";
import { IssuersService } from "./issuers.service";
import { IssuersController } from "./issuers.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { IssuerUser, IssuerUserSchema } from "./schemas/issuer.schema";
import { IssuerApplication, IssuerApplicationSchema } from "./schemas/issuerApplication.schema";

@Module({
  controllers: [IssuersController],
  providers: [IssuersService],
  imports: [
    MongooseModule.forFeature([
      { name: IssuerUser.name, schema: IssuerUserSchema },
      { name: IssuerApplication.name, schema: IssuerApplicationSchema },
    ]),
  ],
})
export class IssuersModule {}
