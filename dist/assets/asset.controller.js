"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetApprovalController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const asset_service_1 = require("./asset.service");
const asset_approval_pagination_dto_1 = require("./dto/asset-approval-pagination.dto");
const update_asset_approval_dto_1 = require("./dto/update-asset-approval.dto");
let AssetApprovalController = class AssetApprovalController {
    constructor(assetApprovalService) {
        this.assetApprovalService = assetApprovalService;
    }
    async getAssetApprovalList(query) {
        return this.assetApprovalService.getAll(query);
    }
    async updateAssetApproval(assetId, body) {
        if (!assetId) {
            throw new common_1.BadRequestException('assetId is required');
        }
        return this.assetApprovalService.updateAssetApproval(assetId, body);
    }
};
exports.AssetApprovalController = AssetApprovalController;
__decorate([
    (0, common_1.Get)('list'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get asset approval list' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Asset approval list returned' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [asset_approval_pagination_dto_1.AssetApprovalPaginationDto]),
    __metadata("design:returntype", Promise)
], AssetApprovalController.prototype, "getAssetApprovalList", null);
__decorate([
    (0, common_1.Patch)('update'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Approve or reject asset' }),
    __param(0, (0, common_1.Query)('assetId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_asset_approval_dto_1.UpdateAssetApprovalDto]),
    __metadata("design:returntype", Promise)
], AssetApprovalController.prototype, "updateAssetApproval", null);
exports.AssetApprovalController = AssetApprovalController = __decorate([
    (0, common_1.Controller)('asset-approval'),
    __metadata("design:paramtypes", [asset_service_1.AssetApprovalService])
], AssetApprovalController);
//# sourceMappingURL=asset.controller.js.map