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
exports.AssetFeeConfigSchema = exports.AssetFeeConfig = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const assetFeeConfig_types_1 = require("../interfaces/assetFeeConfig.types");
let AssetFeeConfig = class AssetFeeConfig extends mongoose_2.Document {
};
exports.AssetFeeConfig = AssetFeeConfig;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Asset',
        required: true,
    }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], AssetFeeConfig.prototype, "assetId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'issuerprofiles',
        required: true,
    }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], AssetFeeConfig.prototype, "issuerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(assetFeeConfig_types_1.FeeType),
        required: true,
    }),
    __metadata("design:type", String)
], AssetFeeConfig.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], AssetFeeConfig.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, min: 0 }),
    __metadata("design:type", Number)
], AssetFeeConfig.prototype, "value", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: false }),
    __metadata("design:type", Boolean)
], AssetFeeConfig.prototype, "isPercentage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: true }),
    __metadata("design:type", Boolean)
], AssetFeeConfig.prototype, "status", void 0);
exports.AssetFeeConfig = AssetFeeConfig = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (_, ret) => {
                delete ret.__v;
                return ret;
            },
        },
    })
], AssetFeeConfig);
exports.AssetFeeConfigSchema = mongoose_1.SchemaFactory.createForClass(AssetFeeConfig);
//# sourceMappingURL=assetFeeConfig.schema.js.map