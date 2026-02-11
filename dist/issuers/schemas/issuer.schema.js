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
exports.IssuerUserSchema = exports.IssuerUser = exports.KYCStatus = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
var KYCStatus;
(function (KYCStatus) {
    KYCStatus["PENDING"] = "pending";
    KYCStatus["APPROVED"] = "approved";
    KYCStatus["REJECTED"] = "rejected";
})(KYCStatus || (exports.KYCStatus = KYCStatus = {}));
let IssuerUser = class IssuerUser extends mongoose_2.Document {
};
exports.IssuerUser = IssuerUser;
__decorate([
    (0, mongoose_1.Prop)({ required: true, lowercase: true, trim: true }),
    __metadata("design:type", String)
], IssuerUser.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true }),
    __metadata("design:type", String)
], IssuerUser.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true }),
    __metadata("design:type", String)
], IssuerUser.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true }),
    __metadata("design:type", String)
], IssuerUser.prototype, "phoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Object }),
    __metadata("design:type", Object)
], IssuerUser.prototype, "metadata", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true }),
    __metadata("design:type", String)
], IssuerUser.prototype, "kycStatus", void 0);
exports.IssuerUser = IssuerUser = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'issuerprofiles',
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (_, ret) => {
                delete ret.password;
                delete ret.__v;
                return ret;
            },
        },
    })
], IssuerUser);
exports.IssuerUserSchema = mongoose_1.SchemaFactory.createForClass(IssuerUser);
exports.IssuerUserSchema.index({ email: 1 }, { unique: true });
exports.IssuerUserSchema.index({ createdAt: -1 });
//# sourceMappingURL=issuer.schema.js.map