import { IsMongoId } from 'class-validator';

export class AssetIdParamDto {
  @IsMongoId()
  assetId: string;
}
