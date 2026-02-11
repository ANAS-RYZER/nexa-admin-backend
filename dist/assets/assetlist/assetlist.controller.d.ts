import { AssetService } from './assetlist.service';
import { AssetIdParamDto } from './dto/assetlist-id-param.dto';
export declare class AssetController {
    private readonly assetService;
    constructor(assetService: AssetService);
    getAssetById(params: AssetIdParamDto): Promise<{
        data: any;
        message: string;
    }>;
}
