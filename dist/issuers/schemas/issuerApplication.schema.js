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
exports.IssuerApplicationSchema = exports.IssuerApplication = exports.ApplicationStatus = exports.AssetCategory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
var AssetCategory;
(function (AssetCategory) {
    AssetCategory["REAL_ESTATE"] = "Real Estate";
    AssetCategory["COMMODITIES"] = "Commodities";
    AssetCategory["COMPANY_EQUITY"] = "Company Equity";
    AssetCategory["ART_COLLECTIBLES"] = "Art & Collectibles";
    AssetCategory["INTELLECTUAL_PROPERTY"] = "Intellectual Property";
    AssetCategory["OTHER"] = "Other";
})(AssetCategory || (exports.AssetCategory = AssetCategory = {}));
var ApplicationStatus;
(function (ApplicationStatus) {
    ApplicationStatus["PENDING"] = "pending";
    ApplicationStatus["UNDER_REVIEW"] = "under_review";
    ApplicationStatus["APPROVED"] = "approved";
    ApplicationStatus["REJECTED"] = "rejected";
    ApplicationStatus["REQUIRES_MORE_INFO"] = "requires_more_info";
})(ApplicationStatus || (exports.ApplicationStatus = ApplicationStatus = {}));
let IssuerApplication = class IssuerApplication extends mongoose_2.Document {
};
exports.IssuerApplication = IssuerApplication;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], IssuerApplication.prototype, "applicationId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], IssuerApplication.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ lowercase: true, trim: true }),
    __metadata("design:type", String)
], IssuerApplication.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true }),
    __metadata("design:type", String)
], IssuerApplication.prototype, "phoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true }),
    __metadata("design:type", String)
], IssuerApplication.prototype, "phoneCountryCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, minlength: 2 }),
    __metadata("design:type", String)
], IssuerApplication.prototype, "legalEntityName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, minlength: 2 }),
    __metadata("design:type", String)
], IssuerApplication.prototype, "countryOfIncorporation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String, enum: AssetCategory }),
    __metadata("design:type", String)
], IssuerApplication.prototype, "assetCategory", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, minlength: 10 }),
    __metadata("design:type", String)
], IssuerApplication.prototype, "shortAssetDescription", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ApplicationStatus,
        default: ApplicationStatus.PENDING,
    }),
    __metadata("design:type", String)
], IssuerApplication.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], IssuerApplication.prototype, "reviewedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], IssuerApplication.prototype, "reviewNotes", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], IssuerApplication.prototype, "rejectionReason", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], IssuerApplication.prototype, "metadata", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], IssuerApplication.prototype, "lastSeenByAdminAt", void 0);
exports.IssuerApplication = IssuerApplication = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'issuer_applications',
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (_, ret) => {
                delete ret.__v;
                return ret;
            },
        },
    })
], IssuerApplication);
exports.IssuerApplicationSchema = mongoose_1.SchemaFactory.createForClass(IssuerApplication);
exports.IssuerApplicationSchema.index({ applicationId: 1 }, { unique: true });
exports.IssuerApplicationSchema.index({ userId: 1 });
exports.IssuerApplicationSchema.index({ email: 1 });
exports.IssuerApplicationSchema.index({ status: 1 });
exports.IssuerApplicationSchema.index({ assetCategory: 1 });
exports.IssuerApplicationSchema.index({ legalEntityName: 'text', shortAssetDescription: 'text' });
exports.IssuerApplicationSchema.index({ createdAt: -1 });
exports.IssuerApplicationSchema.index({ countryOfIncorporation: 1 });
exports.IssuerApplicationSchema.index({ userId: 1, status: 1 });
exports.IssuerApplicationSchema.index({ status: 1, createdAt: -1 });
exports.IssuerApplicationSchema.index({ assetCategory: 1, status: 1 });
//# sourceMappingURL=issuerApplication.schema.js.map