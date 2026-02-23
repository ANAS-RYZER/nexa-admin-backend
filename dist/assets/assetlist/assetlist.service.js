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
exports.AssetService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const asset_schema_1 = require("../schemas/asset.schema");
const spv_schema_1 = require("../../spvs/schemas/spv.schema");
let AssetService = class AssetService {
    constructor(assetModel, spvModel) {
        this.assetModel = assetModel;
        this.spvModel = spvModel;
    }
    async getAssetById(assetId) {
        const objectId = new mongoose_2.Types.ObjectId(assetId);
        const pipeline = [
            {
                $match: { _id: objectId },
            },
            {
                $lookup: {
                    from: "spvs",
                    let: { spvId: "$spvId" },
                    pipeline: [
                        {
                            $match: {
                                $expr: {
                                    $eq: ["$_id", { $toObjectId: "$$spvId" }],
                                },
                            },
                        },
                        {
                            $project: {
                                _id: 1,
                                name: 1,
                                userId: 1,
                                jurisdiction: 1,
                                status: 1,
                                blockchain: 1,
                            },
                        },
                    ],
                    as: "company",
                },
            },
            {
                $unwind: {
                    path: "$company",
                    preserveNullAndEmptyArrays: true,
                },
            },
            {
                $lookup: {
                    from: "faqs",
                    localField: "_id",
                    foreignField: "assetId",
                    as: "faqs",
                },
            },
            {
                $lookup: {
                    from: "assettenants",
                    localField: "_id",
                    foreignField: "assetId",
                    as: "tenants",
                },
            },
            {
                $lookup: {
                    from: "assetdocuments",
                    localField: "_id",
                    foreignField: "assetId",
                    as: "documents",
                },
            },
            {
                $lookup: {
                    from: "assetamenities",
                    localField: "_id",
                    foreignField: "assetId",
                    as: "amenities",
                },
            },
            {
                $lookup: {
                    from: "assetexpenses",
                    localField: "_id",
                    foreignField: "assetId",
                    as: "expenses",
                },
            },
            {
                $lookup: {
                    from: "assetfeatures",
                    localField: "_id",
                    foreignField: "assetId",
                    as: "features",
                },
            },
            {
                $lookup: {
                    from: "riskfactors",
                    localField: "_id",
                    foreignField: "assetId",
                    as: "riskFactors",
                },
            },
            {
                $lookup: {
                    from: "riskdisclosures",
                    localField: "_id",
                    foreignField: "assetId",
                    as: "riskDisclosures",
                },
            },
            {
                $lookup: {
                    from: "assettermsandconditions",
                    localField: "_id",
                    foreignField: "assetId",
                    as: "termsAndConditions",
                },
            },
            {
                $lookup: {
                    from: "exitopportunities",
                    localField: "_id",
                    foreignField: "assetId",
                    as: "exitOpportunities",
                },
            },
            {
                $lookup: {
                    from: "additionaltaxes",
                    localField: "_id",
                    foreignField: "assetId",
                    as: "additionalTaxes",
                },
            },
            {
                $lookup: {
                    from: "assetduediligencelegals",
                    localField: "_id",
                    foreignField: "assetId",
                    as: "dueDiligenceLegal",
                },
            },
            {
                $lookup: {
                    from: "assetduediligencestructures",
                    localField: "_id",
                    foreignField: "assetId",
                    as: "dueDiligenceStructure",
                },
            },
            {
                $lookup: {
                    from: "assetduediligencevaluations",
                    localField: "_id",
                    foreignField: "assetId",
                    as: "dueDiligenceValuation",
                },
            },
            {
                $lookup: {
                    from: "documenttemplates",
                    localField: "_id",
                    foreignField: "assetId",
                    as: "signatureDocuments",
                },
            },
        ];
        const result = await this.assetModel.aggregate(pipeline);
        if (!result.length) {
            throw new common_1.NotFoundException("Asset not found");
        }
        const asset = result[0];
        return {
            ...asset,
            dueDiligence: {
                legal: asset.dueDiligenceLegal ?? [],
                structure: asset.dueDiligenceStructure ?? [],
                valuation: asset.dueDiligenceValuation ?? [],
            },
        };
    }
};
exports.AssetService = AssetService;
exports.AssetService = AssetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(asset_schema_1.Asset.name)),
    __param(1, (0, mongoose_1.InjectModel)(spv_schema_1.SPV.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], AssetService);
//# sourceMappingURL=assetlist.service.js.map