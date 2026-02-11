import { IsEnum, IsOptional, IsString } from 'class-validator';
import { AssetStatus } from '../../assets/interfaces/asset.type';

export class UpdateAssetApprovalDto {
  @IsEnum([AssetStatus.APPROVED, AssetStatus.REJECTED], {
    message: 'Status must be Approved or Rejected',
  })
  status: AssetStatus.APPROVED | AssetStatus.REJECTED;

  @IsOptional()
  @IsString()
  adminComments?: string;
}
