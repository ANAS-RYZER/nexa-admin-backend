import {
  IsOptional,
  IsString,
  IsIn,
  ValidateNested,
  IsNotEmptyObject,
} from "class-validator";

import { CompanyStatus } from "../schemas/spv.schema";

import { Type } from "class-transformer";

export class BlockChainDto {
  @IsString()
  spvAddress: string;

  @IsOptional()
  @IsString()
  daoAddress: string;

  @IsString()
  txHash: string;
}

export class UpdateSpvStatusDto {
  @IsIn([CompanyStatus.ACTIVE, CompanyStatus.REJECTED], {
    message: "Status must be either ACTIVE or REJECTED",
  })
  status: CompanyStatus;

  @IsOptional()
  @IsString()
  adminComments?: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => BlockChainDto)
  blockchain?: BlockChainDto;
}
