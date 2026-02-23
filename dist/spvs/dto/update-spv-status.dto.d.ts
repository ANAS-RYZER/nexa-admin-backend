import { CompanyStatus } from "../schemas/spv.schema";
export declare class BlockChainDto {
    spvAddress: string;
    daoAddress: string;
    txHash: string;
}
export declare class UpdateSpvStatusDto {
    status: CompanyStatus;
    adminComments?: string;
    blockchain?: BlockChainDto;
}
