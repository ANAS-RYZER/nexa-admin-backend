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
let AssetApprovalService = class AssetApprovalService {
    constructor(assetApprovalModel, assetModel) {
        this.assetApprovalModel = assetApprovalModel;
        this.assetModel = assetModel;
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
            throw new common_1.NotFoundException('Asset approval record not found');
        }
        await this.assetApprovalModel.updateOne({ _id: approvalRecord._id }, {
            status: body.status,
            adminComments: body.adminComments ?? null,
        });
        const assetUpdate = await this.assetModel.updateOne({ _id: assetObjectId }, { status: body.status });
        if (assetUpdate.matchedCount === 0) {
            throw new common_1.NotFoundException('Asset not found');
        }
        return {
            success: true,
            message: body.status === asset_type_1.AssetStatus.APPROVED
                ? 'Asset approved successfully'
                : 'Asset rejected successfully',
        };
    }
};
exports.AssetApprovalService = AssetApprovalService;
exports.AssetApprovalService = AssetApprovalService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(assetApproval_schema_1.assetApproval.name)),
    __param(1, (0, mongoose_1.InjectModel)(asset_schema_1.Asset.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], AssetApprovalService);
//# sourceMappingURL=asset.service.js.map