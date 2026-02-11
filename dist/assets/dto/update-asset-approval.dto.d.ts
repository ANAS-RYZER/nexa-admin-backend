import { AssetStatus } from '../../assets/interfaces/asset.type';
export declare class UpdateAssetApprovalDto {
    status: AssetStatus.APPROVED | AssetStatus.REJECTED;
    adminComments?: string;
}
