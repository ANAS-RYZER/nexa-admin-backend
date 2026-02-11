import { CompanyStatus } from '../schemas/spv.schema';
export declare class UpdateSpvStatusDto {
    status: CompanyStatus;
    adminComments?: string;
}
