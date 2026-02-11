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
exports.SpvStatusController = void 0;
const common_1 = require("@nestjs/common");
const spv_service_1 = require("./spv.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const spv_status_pagination_dto_1 = require("./dto/spv-status-pagination.dto");
const update_spv_status_dto_1 = require("./dto/update-spv-status.dto");
let SpvStatusController = class SpvStatusController {
    constructor(spvStatusService) {
        this.spvStatusService = spvStatusService;
    }
    async getSpvStatusList(query) {
        return this.spvStatusService.getAll(query);
    }
    async updateSpvStatus(spvId, body) {
        if (!spvId) {
            throw new common_1.BadRequestException('spvId is required');
        }
        return this.spvStatusService.updateSpvStatus(spvId, body);
    }
};
exports.SpvStatusController = SpvStatusController;
__decorate([
    (0, common_1.Get)('list'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get SPV status list' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'SPV status list returned' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [spv_status_pagination_dto_1.SpvStatusPaginationDto]),
    __metadata("design:returntype", Promise)
], SpvStatusController.prototype, "getSpvStatusList", null);
__decorate([
    (0, common_1.Patch)('update'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Active or reject SPV status' }),
    __param(0, (0, common_1.Query)('spvId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_spv_status_dto_1.UpdateSpvStatusDto]),
    __metadata("design:returntype", Promise)
], SpvStatusController.prototype, "updateSpvStatus", null);
exports.SpvStatusController = SpvStatusController = __decorate([
    (0, common_1.Controller)('spv-status'),
    __metadata("design:paramtypes", [spv_service_1.SpvStatusService])
], SpvStatusController);
//# sourceMappingURL=spv.controller.js.map