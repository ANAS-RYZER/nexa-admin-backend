import {
  IsEnum,
  IsNotEmptyObject,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { AssetStatus } from "../../assets/interfaces/asset.type";
import { Type } from "class-transformer";

export class BlockChainDto {
  @IsString()
  assetAddress: string;

  @IsOptional()
  @IsString()
  assetManagerAddress: string;

  @IsOptional()
  @IsString()
  orderManagerAddress: string;

  @IsString()
  assetIdHash: string;

  
  @IsString()
  spvIdHash: string;

  @IsString()
  txHash: string;

  

  
}

export class UpdateAssetApprovalDto {
  @IsEnum([AssetStatus.APPROVED, AssetStatus.REJECTED], {
    message: "Status must be Approved or Rejected",
  })
  status: AssetStatus.APPROVED | AssetStatus.REJECTED;

  @IsOptional()
  @IsString()
  adminComments?: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => BlockChainDto)
  blockchain?: BlockChainDto;
}
