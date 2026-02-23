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
exports.AssetApprovalService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const assetApproval_schema_1 = require("./schemas/assetApproval.schema");
const asset_schema_1 = require("../assets/schemas/asset.schema");
const asset_type_1 = require("../assets/interfaces/asset.type");
const email_service_1 = require("../infra/email/email.service");
let AssetApprovalService = class AssetApprovalService {
    constructor(assetApprovalModel, assetModel, emailService) {
        this.assetApprovalModel = assetApprovalModel;
        this.assetModel = assetModel;
        this.emailService = emailService;
    }
    async getAll(query) {
        const page = Number(query.page) || 1;
        const limit = Number(query.limit) || 10;
        const skip = (page - 1) * limit;
        const filter = {};
        if (query.status) {
            filter.status = query.status;
        }
        const [data, totalCount] = await Promise.all([
            this.assetApprovalModel
                .find(filter)
                .sort({ createdAt: -1 })
                .skip(skip)
                .limit(limit)
                .lean()
                .exec(),
            this.assetApprovalModel.countDocuments(filter),
        ]);
        const totalPages = Math.ceil(totalCount / limit);
        return {
            success: true,
            data,
            pagination: {
                page,
                limit,
                currentPage: page,
                hasNextPage: page < totalPages,
                hasPreviousPage: page > 1,
                totalCount,
                totalPages,
            },
        };
    }
    async updateAssetApproval(assetId, body) {
        const assetObjectId = new mongoose_2.Types.ObjectId(assetId);
        const approvalRecord = await this.assetApprovalModel.findOne({
            assetId: assetObjectId,
        });
        if (!approvalRecord) {
            throw new common_1.NotFoundException("Asset approval record not found");
        }
        const updatedAssetApproval = await this.assetApprovalModel.findByIdAndUpdate(approvalRecord._id, {
            status: body.status,
            adminComments: body.adminComments ?? null,
        }, { new: true });
        if (!updatedAssetApproval) {
            throw new common_1.NotFoundException("Failed to update Asset approval record");
        }
        let assetUpdateResult = null;
        if (updatedAssetApproval?.status === asset_type_1.AssetStatus.APPROVED) {
            assetUpdateResult = await this.assetModel.findByIdAndUpdate(assetObjectId, {
                status: body.status,
                blockchain: {
                    spvAddress: body.blockchain?.spvAddress,
                    daoAddress: body.blockchain?.daoAddress,
                    txHash: body.blockchain?.txHash,
                },
            }, { new: true });
        }
        if (!assetUpdateResult) {
            throw new common_1.NotFoundException("Failed to update Asset record");
        }
        if (body.status === asset_type_1.AssetStatus.APPROVED ||
            body.status === asset_type_1.AssetStatus.REJECTED) {
            await this.emailService.sendAssetStatusUpdateEmail(approvalRecord.issueremail, {
                issuerName: approvalRecord.issuername,
                assetName: approvalRecord.assetName,
                status: body.status,
                adminComments: body.adminComments,
            });
        }
        return {
            success: true,
            message: body.status === asset_type_1.AssetStatus.APPROVED
                ? "Asset approved successfully"
                : "Asset rejected successfully",
        };
    }
};
exports.AssetApprovalService = AssetApprovalService;
exports.AssetApprovalService = AssetApprovalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(assetApproval_schema_1.assetApproval.name)),
    __param(1, (0, mongoose_1.InjectModel)(asset_schema_1.Asset.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        email_service_1.EmailService])
], AssetApprovalService);
//# sourceMappingURL=asset.service.js.map