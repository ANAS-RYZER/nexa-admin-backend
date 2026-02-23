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
exports.SpvStatusService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const spvstatus_schema_1 = require("./schemas/spvstatus.schema");
const spv_schema_1 = require("./schemas/spv.schema");
const spv_schema_2 = require("./schemas/spv.schema");
const email_service_1 = require("../infra/email/email.service");
let SpvStatusService = class SpvStatusService {
    constructor(spvStatusModel, spvModel, emailService) {
        this.spvStatusModel = spvStatusModel;
        this.spvModel = spvModel;
        this.emailService = emailService;
    }
    async getAll(query) {
        const page = query.page ?? 1;
        const limit = query.limit ?? 10;
        const skip = (page - 1) * limit;
        const filter = {};
        if (query.status) {
            filter.status = query.status;
        }
        const [data, totalCount] = await Promise.all([
            this.spvStatusModel
                .find(filter)
                .sort({ createdAt: -1 })
                .populate("spvId", "name userId blockchain")
                .skip(skip)
                .limit(limit)
                .exec(),
            this.spvStatusModel.countDocuments(filter),
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
    async updateSpvStatus(spvId, body) {
        const spvStatusRecord = await this.spvStatusModel.findOne({ spvId });
        if (!spvStatusRecord) {
            throw new common_1.NotFoundException("SPV status record not found");
        }
        const updatedSpvStatus = await this.spvStatusModel.findByIdAndUpdate(spvStatusRecord._id, {
            $set: {
                status: body.status,
                adminComments: body.adminComments ?? null,
            },
        }, { new: true });
        if (!updatedSpvStatus) {
            throw new common_1.NotFoundException("Failed to update SPV status record");
        }
        let spvUpdateResult = null;
        console.log("Updated SPV Status:", body);
        console.log("Updated SPV Block chain:", body.blockchain);
        if (updatedSpvStatus?.status === spv_schema_1.CompanyStatus.ACTIVE) {
            spvUpdateResult = await this.spvModel.findByIdAndUpdate(spvId, {
                status: body.status,
                blockchain: {
                    spvAddress: body.blockchain?.spvAddress,
                    daoAddress: body.blockchain?.daoAddress,
                    txHash: body.blockchain?.txHash,
                },
            }, { new: true });
            if (!spvUpdateResult) {
                throw new common_1.NotFoundException("SPV record not found");
            }
        }
        if (updatedSpvStatus.status === spv_schema_1.CompanyStatus.ACTIVE ||
            updatedSpvStatus.status === spv_schema_1.CompanyStatus.REJECTED) {
            await this.emailService.sendSpvStatusUpdateEmail(updatedSpvStatus.issueremail, {
                issuerName: updatedSpvStatus.issuername,
                spvName: updatedSpvStatus.spvname,
                status: updatedSpvStatus.status,
                adminComments: updatedSpvStatus.adminComments,
            });
        }
        return {
            success: true,
            message: updatedSpvStatus.status === spv_schema_1.CompanyStatus.ACTIVE
                ? "SPV activated and updated successfully"
                : "SPV status updated successfully (SPV notupdated)",
        };
    }
};
exports.SpvStatusService = SpvStatusService;
exports.SpvStatusService = SpvStatusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(spvstatus_schema_1.spvStatus.name)),
    __param(1, (0, mongoose_1.InjectModel)(spv_schema_2.SPV.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        email_service_1.EmailService])
], SpvStatusService);
//# sourceMappingURL=spv.service.js.map