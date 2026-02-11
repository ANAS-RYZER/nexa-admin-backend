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
exports.IssuersService = void 0;
const common_1 = require("@nestjs/common");
const issuer_schema_1 = require("./schemas/issuer.schema");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const issuerApplication_schema_1 = require("./schemas/issuerApplication.schema");
let IssuersService = class IssuersService {
    constructor(issuerUserModel, issuerApplicationModel) {
        this.issuerUserModel = issuerUserModel;
        this.issuerApplicationModel = issuerApplicationModel;
    }
    async getIssuerApplicationList() {
        const list = await this.issuerApplicationModel.find().exec();
        return { success: true, data: list };
    }
    async getIssuerById(id) {
        if (!mongoose_1.Types.ObjectId.isValid(id)) {
            throw new common_1.NotFoundException("Invalid application id");
        }
        const application = await this.issuerApplicationModel.findById(id).lean();
        if (!application) {
            throw new common_1.NotFoundException("Issuer application not found");
        }
        const issuerUser = await this.issuerUserModel
            .findById(application.userId)
            .lean();
        if (!issuerUser) {
            throw new common_1.NotFoundException("Issuer user not found");
        }
        this.issuerApplicationModel
            .updateOne({ _id: id }, { $set: { lastSeenByAdminAt: new Date() } })
            .exec();
        return {
            success: true,
            data: {
                application,
                issuer: issuerUser,
            },
        };
    }
    async updateStatusApplication(id, status) {
        const application = await this.issuerApplicationModel
            .findById(id)
            .select("userId")
            .lean();
        if (!application) {
            throw new common_1.NotFoundException("Issuer application not found");
        }
        const issuer = await this.issuerUserModel
            .findById(application.userId)
            .select("kycStatus")
            .lean();
        if (!issuer) {
            throw new common_1.NotFoundException("Issuer user not found");
        }
        if (!issuer.kycStatus) {
            throw new common_1.BadRequestException("KYB verification is required before updating application status");
        }
        const result = await this.issuerApplicationModel.findByIdAndUpdate(id, { status }, { new: false });
        if (!result) {
            throw new common_1.NotFoundException("Issuer application not found");
        }
        return {
            success: true,
            message: "Application status updated successfully",
        };
    }
};
exports.IssuersService = IssuersService;
exports.IssuersService = IssuersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(issuer_schema_1.IssuerUser.name)),
    __param(1, (0, mongoose_2.InjectModel)(issuerApplication_schema_1.IssuerApplication.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], IssuersService);
//# sourceMappingURL=issuers.service.js.map