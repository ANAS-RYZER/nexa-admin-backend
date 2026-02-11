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
exports.AssetTenantSchema = exports.AssetTenant = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const assetTenant_types_1 = require("../interfaces/assetTenant.types");
let AssetTenant = class AssetTenant extends mongoose_2.Document {
};
exports.AssetTenant = AssetTenant;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Asset',
        required: true,
    }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], AssetTenant.prototype, "assetId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'issuerprofiles',
        required: true,
    }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], AssetTenant.prototype, "issuerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], AssetTenant.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], AssetTenant.prototype, "rentPerSft", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], AssetTenant.prototype, "sftsAllocated", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], AssetTenant.prototype, "annualRentEscalation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Date)
], AssetTenant.prototype, "startDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true }),
    __metadata("design:type", Date)
], AssetTenant.prototype, "endDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(assetTenant_types_1.TenantStatus),
        default: assetTenant_types_1.TenantStatus.ACTIVE,
    }),
    __metadata("design:type", String)
], AssetTenant.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(assetTenant_types_1.TenantType),
        default: assetTenant_types_1.TenantType.CORPORATE,
        required: true,
    }),
    __metadata("design:type", String)
], AssetTenant.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], AssetTenant.prototype, "lockInPeriod", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], AssetTenant.prototype, "leasePeriod", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], AssetTenant.prototype, "securityDeposit", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], AssetTenant.prototype, "interestOnSecurityDeposit", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            name: { type: String, trim: true, default: null },
            url: { type: String, trim: true, default: null },
        },
        default: null,
    }),
    __metadata("design:type", Object)
], AssetTenant.prototype, "agreement", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, trim: true, default: null }),
    __metadata("design:type", Object)
], AssetTenant.prototype, "logo", void 0);
exports.AssetTenant = AssetTenant = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'assettenants',
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (_, ret) => {
                delete ret.__v;
                return ret;
            },
        },
    })
], AssetTenant);
exports.AssetTenantSchema = mongoose_1.SchemaFactory.createForClass(AssetTenant);
//# sourceMappingURL=assetTenant.schema.js.map