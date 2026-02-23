import { AssetStatus } from "../../assets/interfaces/asset.type";
export declare class BlockChainDto {
    spvAddress: string;
    daoAddress: string;
    txHash: string;
}
export declare class UpdateAssetApprovalDto {
    status: AssetStatus.APPROVED | AssetStatus.REJECTED;
    adminComments?: string;
    blockchain?: BlockChainDto;
}
