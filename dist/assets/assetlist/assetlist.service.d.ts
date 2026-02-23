import { Model } from "mongoose";
import { AssetDocument } from "../schemas/asset.schema";
import { SPV } from "../../spvs/schemas/spv.schema";
export declare class AssetService {
    private readonly assetModel;
    private readonly spvModel;
    constructor(assetModel: Model<AssetDocument>, spvModel: Model<SPV>);
    getAssetById(assetId: string): Promise<any>;
}
