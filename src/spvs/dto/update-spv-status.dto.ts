import { IsOptional, IsString, IsIn } from 'class-validator';
import { CompanyStatus } from '../schemas/spv.schema';

export class UpdateSpvStatusDto {
  @IsIn([CompanyStatus.ACTIVE, CompanyStatus.REJECTED], {
    message: 'Status must be either ACTIVE or REJECTED',
  })
  status: CompanyStatus; 

  @IsOptional()
  @IsString()
  adminComments?: string; 
}
