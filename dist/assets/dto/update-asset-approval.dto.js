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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAssetApprovalDto = void 0;
const class_validator_1 = require("class-validator");
const asset_type_1 = require("../../assets/interfaces/asset.type");
class UpdateAssetApprovalDto {
}
exports.UpdateAssetApprovalDto = UpdateAssetApprovalDto;
__decorate([
    (0, class_validator_1.IsEnum)([asset_type_1.AssetStatus.APPROVED, asset_type_1.AssetStatus.REJECTED], {
        message: 'Status must be Approved or Rejected',
    }),
    __metadata("design:type", String)
], UpdateAssetApprovalDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateAssetApprovalDto.prototype, "adminComments", void 0);
//# sourceMappingURL=update-asset-approval.dto.js.map