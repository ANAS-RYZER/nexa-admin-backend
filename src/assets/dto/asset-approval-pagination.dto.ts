import { IsEnum, IsNumber, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { AssetStatus } from '../../assets/interfaces/asset.type';

export class AssetApprovalPaginationDto {
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  limit?: number = 10;

  @IsOptional()
  @IsEnum(AssetStatus, {
    message: `status must be one of: ${Object.values(AssetStatus).join(', ')}`,
  })
  status?: AssetStatus;
}
