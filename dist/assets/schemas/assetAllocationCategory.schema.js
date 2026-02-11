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
exports.AssetAllocationCategorySchema = exports.AssetAllocationCategory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const assetAllocationCategory_types_1 = require("../interfaces/assetAllocationCategory.types");
let AssetAllocationCategory = class AssetAllocationCategory extends mongoose_2.Document {
};
exports.AssetAllocationCategory = AssetAllocationCategory;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'Asset',
        required: true,
        index: true,
    }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], AssetAllocationCategory.prototype, "assetId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: 'issuerprofiles',
        required: true,
    }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], AssetAllocationCategory.prototype, "issuerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
        trim: true,
    }),
    __metadata("design:type", String)
], AssetAllocationCategory.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        min: 0,
        max: 100,
    }),
    __metadata("design:type", Number)
], AssetAllocationCategory.prototype, "percentage", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        required: true,
        min: 0,
    }),
    __metadata("design:type", Number)
], AssetAllocationCategory.prototype, "tokens", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(assetAllocationCategory_types_1.VestingType),
        required: true,
    }),
    __metadata("design:type", String)
], AssetAllocationCategory.prototype, "vestingType", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
        validate: {
            validator: function (startDate) {
                if (this.vestingType === assetAllocationCategory_types_1.VestingType.NO_VESTING)
                    return true;
                return startDate != null;
            },
            message: 'Vesting start date is required for linear and cliff vesting'
        }
    }),
    __metadata("design:type", Date)
], AssetAllocationCategory.prototype, "vestingStartDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
        validate: {
            validator: function (endDate) {
                if (this.vestingType === assetAllocationCategory_types_1.VestingType.NO_VESTING)
                    return true;
                if (!endDate)
                    return false;
                if (!this.vestingStartDate)
                    return false;
                return endDate > this.vestingStartDate;
            },
            message: 'Vesting end date must be after start date'
        }
    }),
    __metadata("design:type", Date)
], AssetAllocationCategory.prototype, "vestingEndDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        min: 0,
        validate: {
            validator: function (period) {
                if (this.vestingType !== assetAllocationCategory_types_1.VestingType.CLIFF_VESTING)
                    return true;
                if (!period)
                    return false;
                if (!this.vestingStartDate || !this.vestingEndDate)
                    return false;
                const totalDuration = Math.ceil((this.vestingEndDate.getTime() - this.vestingStartDate.getTime()) / (1000 * 60 * 60 * 24));
                return period < totalDuration;
            },
            message: 'Cliff period must be less than total vesting duration'
        }
    }),
    __metadata("design:type", Number)
], AssetAllocationCategory.prototype, "cliffPeriod", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        trim: true,
    }),
    __metadata("design:type", String)
], AssetAllocationCategory.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Boolean,
        default: true,
    }),
    __metadata("design:type", Boolean)
], AssetAllocationCategory.prototype, "isActive", void 0);
exports.AssetAllocationCategory = AssetAllocationCategory = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'assetAllocationCategories',
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (_, ret) => {
                delete ret.__v;
                return ret;
            },
        },
        toObject: { virtuals: true },
    })
], AssetAllocationCategory);
exports.AssetAllocationCategorySchema = mongoose_1.SchemaFactory.createForClass(AssetAllocationCategory);
exports.AssetAllocationCategorySchema.index({ assetId: 1, category: 1 }, { unique: true });
exports.AssetAllocationCategorySchema.virtual('vestingDuration').get(function () {
    if (this.vestingStartDate && this.vestingEndDate) {
        return Math.ceil((this.vestingEndDate.getTime() - this.vestingStartDate.getTime()) / (1000 * 60 * 60 * 24));
    }
    return null;
});
exports.AssetAllocationCategorySchema.pre('save', async function (next) {
    try {
        if (this.vestingStartDate && this.vestingEndDate && this.vestingEndDate <= this.vestingStartDate) {
            const error = new Error('Vesting end date must be after vesting start date');
            error.statusCode = 400;
            throw error;
        }
        next();
    }
    catch (error) {
        next(error);
    }
});
//# sourceMappingURL=assetAllocationCategory.schema.js.map