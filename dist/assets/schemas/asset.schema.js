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
exports.AssetSchema = exports.Asset = exports.BlockChainAddressesSchema = exports.BlockChainAddresses = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const asset_type_1 = require("../interfaces/asset.type");
const spv_schema_1 = require("../../spvs/schemas/spv.schema");
let BlockChainAddresses = class BlockChainAddresses {
};
exports.BlockChainAddresses = BlockChainAddresses;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], BlockChainAddresses.prototype, "assetAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], BlockChainAddresses.prototype, "assetManagerAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], BlockChainAddresses.prototype, "orderManagerAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], BlockChainAddresses.prototype, "assetIdHash", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], BlockChainAddresses.prototype, "spvIdHash", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], BlockChainAddresses.prototype, "txHash", void 0);
exports.BlockChainAddresses = BlockChainAddresses = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], BlockChainAddresses);
exports.BlockChainAddressesSchema = mongoose_1.SchemaFactory.createForClass(BlockChainAddresses);
let Asset = class Asset extends mongoose_2.Document {
};
exports.Asset = Asset;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: "issuerprofiles",
        default: null,
    }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], Asset.prototype, "issuerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Schema.Types.ObjectId,
        ref: spv_schema_1.SPV.name,
        required: true,
    }),
    __metadata("design:type", mongoose_2.Schema.Types.ObjectId)
], Asset.prototype, "spvId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(asset_type_1.AssetClass),
    }),
    __metadata("design:type", String)
], Asset.prototype, "class", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(asset_type_1.AssetCategory),
    }),
    __metadata("design:type", String)
], Asset.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(asset_type_1.AssetStage),
    }),
    __metadata("design:type", String)
], Asset.prototype, "stage", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(asset_type_1.AssetStyle),
    }),
    __metadata("design:type", String)
], Asset.prototype, "style", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(asset_type_1.Currency),
        required: true,
    }),
    __metadata("design:type", String)
], Asset.prototype, "currency", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(asset_type_1.InstrumentType),
        required: true,
    }),
    __metadata("design:type", String)
], Asset.prototype, "instrumentType", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Object,
        default: {},
    }),
    __metadata("design:type", Object)
], Asset.prototype, "metadata", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        trim: true,
        default: null,
    }),
    __metadata("design:type", String)
], Asset.prototype, "assetAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: Object.values(asset_type_1.AssetStatus),
        default: asset_type_1.AssetStatus.Draft,
    }),
    __metadata("design:type", String)
], Asset.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Asset.prototype, "bookmarks", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        trim: true,
    }),
    __metadata("design:type", String)
], Asset.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        trim: true,
    }),
    __metadata("design:type", String)
], Asset.prototype, "about", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        trim: true,
    }),
    __metadata("design:type", String)
], Asset.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        trim: true,
    }),
    __metadata("design:type", String)
], Asset.prototype, "state", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        trim: true,
    }),
    __metadata("design:type", String)
], Asset.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        trim: true,
    }),
    __metadata("design:type", String)
], Asset.prototype, "landmark", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: null,
    }),
    __metadata("design:type", Number)
], Asset.prototype, "latitude", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: null,
    }),
    __metadata("design:type", Number)
], Asset.prototype, "longitude", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: exports.BlockChainAddressesSchema, default: {} }),
    __metadata("design:type", BlockChainAddresses)
], Asset.prototype, "blockchain", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Asset.prototype, "hasGlobalFeePercentagesSynced", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Asset.prototype, "hasGlobalFAQsSynced", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Asset.prototype, "hasGlobalRiskFactorsSynced", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Asset.prototype, "hasGlobalRiskDisclosuresSynced", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Asset.prototype, "hasGlobalAdditionalTaxesSynced", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Boolean,
        default: false,
    }),
    __metadata("design:type", Boolean)
], Asset.prototype, "hasGlobalExitOpportunitiesSynced", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Asset.prototype, "totalNumberOfSfts", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Asset.prototype, "pricePerSft", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Asset.prototype, "basePropertyValue", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Asset.prototype, "totalPropertyValueAfterFees", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            targetCapitalAppreciation: { type: Number, default: 0 },
            numberOfYears: { type: Number, default: 0 },
            netInvestmentMultiplier: { type: Number, default: 0 },
            estimatedSalePriceAsPerLockInPeriod: { type: Number, default: 0 },
            capitalGains: { type: Number, default: 0 },
            capitalGainsTax: { type: Number, default: 0 },
            estimatedReturnsAsPerLockInPeriod: { type: Number, default: 0 },
            interestRateonReserves: { type: Number, default: 0 },
            netRentalYield: { type: Number, default: 0 },
            grossRentalYield: { type: Number, default: 0 },
            irr: { type: Number, default: 0 },
            moic: { type: Number, default: 0 },
            latestPropertyValue: { type: Number, default: 0 },
            latestPropertyValueDate: { type: Date, default: null },
        },
        default: {},
    }),
    __metadata("design:type", Object)
], Asset.prototype, "investmentPerformance", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            investorAcreditation: {
                type: String,
                enum: Object.values(asset_type_1.EInvestorAcreditation),
                default: asset_type_1.EInvestorAcreditation.OPEN_TO_ALL,
            },
            kycOrAmlRequirements: {
                type: String,
                enum: Object.values(asset_type_1.EKycOrAmlRequirements),
                default: asset_type_1.EKycOrAmlRequirements.REQUIRED_FOR_ALL,
            },
            lockupPeriod: { type: Number, default: 0 },
            lockupPeriodType: {
                type: String,
                enum: Object.values(asset_type_1.LockInPeriodType),
                default: asset_type_1.LockInPeriodType.MONTH,
            },
            rentalYield: { type: Number, default: 0 },
            distributionStartDate: { type: Date, default: null },
            distributionEndDate: { type: Date, default: null },
        },
        default: {},
    }),
    __metadata("design:type", Object)
], Asset.prototype, "investorRequirementsAndTimeline", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            rentPerSft: { type: Number, default: 0 },
            vacancyRate: { type: Number, default: 0 },
            grossMonthlyRent: { type: Number, default: 0 },
            netMonthlyRent: { type: Number, default: 0 },
            grossAnnualRent: { type: Number, default: 0 },
            netAnnualRent: { type: Number, default: 0 },
            expenses: {
                monthlyExpenses: { type: Number, default: 0 },
                annualExpenses: { type: Number, default: 0 },
            },
            netCashFlow: { type: Number, default: 0 },
        },
        default: {},
    }),
    __metadata("design:type", Object)
], Asset.prototype, "rentalInformation", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            country: { type: String, trim: true, default: "" },
            state: { type: String, trim: true, default: "" },
            escrowBank: { type: String, trim: true, default: "" },
            escrowAgent: { type: String, trim: true, default: "" },
        },
        default: {},
    }),
    __metadata("design:type", Object)
], Asset.prototype, "escrowInformation", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            name: { type: String, trim: true, default: "" },
            document: {
                type: {
                    name: { type: String, trim: true },
                    url: { type: String, trim: true },
                },
                default: null,
            },
        },
        default: {},
    }),
    __metadata("design:type", Object)
], Asset.prototype, "legalAdivisory", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            name: { type: String, trim: true, default: "" },
            document: {
                type: {
                    name: { type: String, trim: true },
                    url: { type: String, trim: true },
                },
                default: null,
            },
        },
        default: {},
    }),
    __metadata("design:type", Object)
], Asset.prototype, "assetManagementCompany", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            name: { type: String, trim: true, default: "" },
            document: {
                type: {
                    name: { type: String, trim: true },
                    url: { type: String, trim: true },
                },
                default: null,
            },
        },
        default: {},
    }),
    __metadata("design:type", Object)
], Asset.prototype, "brokerage", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            hasAssetPossesLoan: { type: Boolean, default: false },
            currentLoanAmount: { type: Number, default: 0 },
            totalNumberOfYears: { type: Number, default: 0 },
            totalLoanAmount: { type: Number, default: 0 },
            numberOfEMIsYetToPay: { type: Number, default: 0 },
            interestRate: { type: Number, default: 0 },
            pendingLoanAmount: { type: Number, default: 0 },
            bankName: { type: String, trim: true, default: "" },
            brankBranch: { type: String, trim: true, default: "" },
        },
        default: {},
    }),
    __metadata("design:type", Object)
], Asset.prototype, "loanInformation", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            tokenSymbol: { type: String, trim: true, default: null },
            tokenSupply: { type: Number, default: 0 },
            minimumTokensToBuy: { type: Number, default: 0 },
            maximumTokensToBuy: { type: Number, default: 0 },
            availableTokensToBuy: { type: Number, default: 0 },
            tokenPrice: { type: Number, default: 0 },
            blockchainProjectAddress: { type: String, default: null },
            blockchainEscrowAddress: { type: String, default: null },
            blockchainOrderManagerAddress: { type: String, default: null },
            blockchainDaoAddress: { type: String, default: null },
        },
        default: {},
    }),
    __metadata("design:type", Object)
], Asset.prototype, "tokenInformation", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            imageURL: { type: String, trim: true, default: "" },
            videoURL: { type: String, trim: true, default: "" },
            gallery: {
                type: [{ type: String, trim: true }],
                default: [],
            },
            pitchDeckURL: { type: String, trim: true, default: "" },
        },
        default: {},
    }),
    __metadata("design:type", Object)
], Asset.prototype, "media", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: {
            name: { type: String, trim: true, default: "" },
            isVerified: { type: Boolean, default: false },
            address: { type: String, trim: true, default: "" },
            phone: { type: String, trim: true, default: "" },
            email: { type: String, trim: true, default: "" },
            website: { type: String, trim: true, default: "" },
            logoURL: { type: String, trim: true, default: "" },
            whatsappNumber: { type: String, trim: true, default: "" },
            totalProjects: { type: Number, default: 0 },
            onGoingProjects: { type: Number, default: 0 },
            primeLocation: { type: String, trim: true, default: "" },
            about: { type: String, trim: true, default: "" },
            yearEstablished: { type: Number, default: null },
        },
        default: {},
    }),
    __metadata("design:type", Object)
], Asset.prototype, "hostedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], Asset.prototype, "totalFundsRaised", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        signatureDocuments: [
            {
                type: mongoose_2.Schema.Types.ObjectId,
                ref: "documenttemplates",
            },
        ],
    }),
    __metadata("design:type", Array)
], Asset.prototype, "signatureDocuments", void 0);
exports.Asset = Asset = __decorate([
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
], Asset);
exports.AssetSchema = mongoose_1.SchemaFactory.createForClass(Asset);
exports.AssetSchema.pre("validate", async function (next) {
    if (!this.currency && this.spvId) {
        try {
            const SPVModel = this.model(spv_schema_1.SPV.name);
            const spv = await SPVModel.findById(this.spvId).select("currency");
            if (spv && spv.currency) {
                this.currency = spv.currency;
                console.log(`Auto-set asset currency to ${this.currency} from SPV ${this.spvId}`);
            }
            else {
                return next(new Error("SPV not found or SPV has no currency set"));
            }
        }
        catch (error) {
            console.error("Error fetching SPV currency for asset:", error);
            return next(error);
        }
    }
    next();
});
//# sourceMappingURL=asset.schema.js.map