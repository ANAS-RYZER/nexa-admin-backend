"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetApprovalModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const asset_controller_1 = require("./asset.controller");
const asset_service_1 = require("./asset.service");
const assetApproval_schema_1 = require("./schemas/assetApproval.schema");
const asset_schema_1 = require("../assets/schemas/asset.schema");
const spv_schema_1 = require("../spvs/schemas/spv.schema");
const assetlist_module_1 = require("../assets/assetlist/assetlist.module");
const email_module_1 = require("../infra/email/email.module");
let AssetApprovalModule = class AssetApprovalModule {
};
exports.AssetApprovalModule = AssetApprovalModule;
exports.AssetApprovalModule = AssetApprovalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: assetApproval_schema_1.assetApproval.name, schema: assetApproval_schema_1.AssetApprovalSchema },
                { name: asset_schema_1.Asset.name, schema: asset_schema_1.AssetSchema },
                { name: spv_schema_1.SPV.name, schema: spv_schema_1.SPVSchema },
            ]),
            assetlist_module_1.AssetModule,
            email_module_1.EmailModule,
        ],
        controllers: [asset_controller_1.AssetApprovalController],
        providers: [asset_service_1.AssetApprovalService],
    })
], AssetApprovalModule);
//# sourceMappingURL=asset.module.js.map