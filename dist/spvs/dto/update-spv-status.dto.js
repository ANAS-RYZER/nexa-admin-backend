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
exports.UpdateSpvStatusDto = exports.BlockChainDto = void 0;
const class_validator_1 = require("class-validator");
const spv_schema_1 = require("../schemas/spv.schema");
const class_transformer_1 = require("class-transformer");
class BlockChainDto {
}
exports.BlockChainDto = BlockChainDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BlockChainDto.prototype, "spvAddress", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BlockChainDto.prototype, "daoAddress", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], BlockChainDto.prototype, "txHash", void 0);
class UpdateSpvStatusDto {
}
exports.UpdateSpvStatusDto = UpdateSpvStatusDto;
__decorate([
    (0, class_validator_1.IsIn)([spv_schema_1.CompanyStatus.ACTIVE, spv_schema_1.CompanyStatus.REJECTED], {
        message: "Status must be either ACTIVE or REJECTED",
    }),
    __metadata("design:type", String)
], UpdateSpvStatusDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UpdateSpvStatusDto.prototype, "adminComments", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => BlockChainDto),
    __metadata("design:type", BlockChainDto)
], UpdateSpvStatusDto.prototype, "blockchain", void 0);
//# sourceMappingURL=update-spv-status.dto.js.map