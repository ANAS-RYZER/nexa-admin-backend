"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssuersModule = void 0;
const common_1 = require("@nestjs/common");
const issuers_service_1 = require("./issuers.service");
const issuers_controller_1 = require("./issuers.controller");
const mongoose_1 = require("@nestjs/mongoose");
const issuer_schema_1 = require("./schemas/issuer.schema");
const issuerApplication_schema_1 = require("./schemas/issuerApplication.schema");
const asset_schema_1 = require("../assets/schemas/asset.schema");
const spv_schema_1 = require("../spvs/schemas/spv.schema");
let IssuersModule = class IssuersModule {
};
exports.IssuersModule = IssuersModule;
exports.IssuersModule = IssuersModule = __decorate([
    (0, common_1.Module)({
        controllers: [issuers_controller_1.IssuersController],
        providers: [issuers_service_1.IssuersService],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: issuer_schema_1.IssuerUser.name, schema: issuer_schema_1.IssuerUserSchema },
                { name: issuerApplication_schema_1.IssuerApplication.name, schema: issuerApplication_schema_1.IssuerApplicationSchema },
                { name: asset_schema_1.Asset.name, schema: asset_schema_1.AssetSchema },
                { name: spv_schema_1.SPV.name, schema: spv_schema_1.SPVSchema },
            ]),
        ],
    })
], IssuersModule);
//# sourceMappingURL=issuers.module.js.map