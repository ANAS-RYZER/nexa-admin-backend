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
exports.IssuersController = void 0;
const common_1 = require("@nestjs/common");
const issuers_service_1 = require("./issuers.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const updateApplicationStatus_dto_1 = require("./dto/updateApplicationStatus.dto");
let IssuersController = class IssuersController {
    constructor(issuersService) {
        this.issuersService = issuersService;
    }
    async getIssuerApplicationList() {
        return this.issuersService.getIssuerApplicationList();
    }
    async getOnboardedAssetsCount(issuerId) {
        if (!issuerId) {
            throw new common_1.BadRequestException("issuerId is required");
        }
        return this.issuersService.getOnboardedAssetsCount(issuerId);
    }
    async getIssuerById(id) {
        return this.issuersService.getIssuerById(id);
    }
    async updateStatusApplication(id, body) {
        console.log(`Updating status for application ID: ${id} to ${body.status}`);
        return this.issuersService.updateStatusApplication(id, body.status);
    }
};
exports.IssuersController = IssuersController;
__decorate([
    (0, common_1.Get)("list"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: "Get current user profile" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "User profile returned" }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "Unauthorized" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], IssuersController.prototype, "getIssuerApplicationList", null);
__decorate([
    (0, common_1.Get)("onboarded-assets-count"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: "Get count of onboarded assets for an issuer" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Asset count returned" }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "Unauthorized" }),
    (0, swagger_1.ApiResponse)({ status: 400, description: "Bad request" }),
    __param(0, (0, common_1.Query)("issuerId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IssuersController.prototype, "getOnboardedAssetsCount", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: "Get issuer application by id" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Issuer application returned" }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "Unauthorized" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Issuer application not found" }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], IssuersController.prototype, "getIssuerById", null);
__decorate([
    (0, common_1.Patch)(":id/status"),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: "Update issuer application status" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Application status updated" }),
    (0, swagger_1.ApiResponse)({ status: 401, description: "Unauthorized" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Issuer application not found" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateApplicationStatus_dto_1.UpdateApplicationStatusDto]),
    __metadata("design:returntype", Promise)
], IssuersController.prototype, "updateStatusApplication", null);
exports.IssuersController = IssuersController = __decorate([
    (0, common_1.Controller)("issuers"),
    __metadata("design:paramtypes", [issuers_service_1.IssuersService])
], IssuersController);
//# sourceMappingURL=issuers.controller.js.map