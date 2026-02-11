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
exports.SpvController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../auth/guards/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const spvlist_service_1 = require("./spvlist.service");
let SpvController = class SpvController {
    constructor(spvService) {
        this.spvService = spvService;
    }
    async getSpvById(spvId) {
        return this.spvService.getSpvById(spvId);
    }
};
exports.SpvController = SpvController;
__decorate([
    (0, common_1.Get)(':spvId'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get SPV by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'SPV data returned' }),
    __param(0, (0, common_1.Param)('spvId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SpvController.prototype, "getSpvById", null);
exports.SpvController = SpvController = __decorate([
    (0, common_1.Controller)('spvs'),
    __metadata("design:paramtypes", [spvlist_service_1.SpvService])
], SpvController);
//# sourceMappingURL=spvlist.controller.js.map