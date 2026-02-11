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
exports.SPVSchema = exports.SPV = exports.DAOConfiguration = exports.GovernanceRights = exports.VotingPeriod = exports.LegalDocuments = exports.EscrowBankDetails = exports.MemoAndTerms = exports.BoardMember = exports.FileUpload = exports.Currency = exports.CompanyStatus = exports.GovernanceModel = exports.Blockchain = exports.Role = exports.AccountType = exports.SPVType = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
var SPVType;
(function (SPVType) {
    SPVType["LLC"] = "LLC";
    SPVType["LP"] = "LP";
    SPVType["TRUST"] = "Trust";
    SPVType["CORPORATION"] = "Corporation";
})(SPVType || (exports.SPVType = SPVType = {}));
var AccountType;
(function (AccountType) {
    AccountType["SAVINGS"] = "Savings";
    AccountType["CHECKING"] = "Checking";
    AccountType["CURRENT"] = "Current";
    AccountType["ESCROW"] = "Escrow";
})(AccountType || (exports.AccountType = AccountType = {}));
var Role;
(function (Role) {
    Role["DIRECTOR"] = "Director";
    Role["ASSET_MANAGER"] = "Asset Manager";
    Role["INVESTOR_MANAGER"] = "Investor Manager";
})(Role || (exports.Role = Role = {}));
var Blockchain;
(function (Blockchain) {
    Blockchain["ETHEREUM"] = "Ethereum";
    Blockchain["POLYGON"] = "Polygon";
    Blockchain["BINANCE_SMART_CHAIN"] = "Binance Smart Chain";
    Blockchain["XRPL"] = "XRPL";
})(Blockchain || (exports.Blockchain = Blockchain = {}));
var GovernanceModel;
(function (GovernanceModel) {
    GovernanceModel["TOKEN_BASED"] = "Token-Weighted";
    GovernanceModel["EQUAL_WEIGHTED"] = "Equal-Voting";
    GovernanceModel["REPUTATION"] = "Reputation";
})(GovernanceModel || (exports.GovernanceModel = GovernanceModel = {}));
var CompanyStatus;
(function (CompanyStatus) {
    CompanyStatus["DRAFT"] = "Draft";
    CompanyStatus["PENDING"] = "Pending";
    CompanyStatus["APPROVAL"] = "Approval";
    CompanyStatus["REJECTED"] = "Rejected";
    CompanyStatus["ACTIVE"] = "Active";
    CompanyStatus["INACTIVE"] = "Inactive";
})(CompanyStatus || (exports.CompanyStatus = CompanyStatus = {}));
var Currency;
(function (Currency) {
    Currency["USD"] = "USD";
    Currency["EUR"] = "EUR";
    Currency["GBP"] = "GBP";
    Currency["INR"] = "INR";
    Currency["AED"] = "AED";
})(Currency || (exports.Currency = Currency = {}));
let FileUpload = class FileUpload {
};
exports.FileUpload = FileUpload;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], FileUpload.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], FileUpload.prototype, "url", void 0);
exports.FileUpload = FileUpload = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], FileUpload);
const FileUploadSchema = mongoose_1.SchemaFactory.createForClass(FileUpload);
let BoardMember = class BoardMember {
};
exports.BoardMember = BoardMember;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], BoardMember.prototype, "fullName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, lowercase: true, trim: true }),
    __metadata("design:type", String)
], BoardMember.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, match: /^\+[1-9]\d{0,3}$/ }),
    __metadata("design:type", String)
], BoardMember.prototype, "countryCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], BoardMember.prototype, "phoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], BoardMember.prototype, "idNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: FileUploadSchema }),
    __metadata("design:type", FileUpload)
], BoardMember.prototype, "idProof", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: Object.values(Role) }),
    __metadata("design:type", String)
], BoardMember.prototype, "role", void 0);
exports.BoardMember = BoardMember = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], BoardMember);
const BoardMemberSchema = mongoose_1.SchemaFactory.createForClass(BoardMember);
let MemoAndTerms = class MemoAndTerms {
};
exports.MemoAndTerms = MemoAndTerms;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MemoAndTerms.prototype, "investmentMemorandum", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MemoAndTerms.prototype, "termsAndConditions", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MemoAndTerms.prototype, "riskFactor", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MemoAndTerms.prototype, "investmentStrategy", void 0);
exports.MemoAndTerms = MemoAndTerms = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], MemoAndTerms);
const MemoAndTermsSchema = mongoose_1.SchemaFactory.createForClass(MemoAndTerms);
let EscrowBankDetails = class EscrowBankDetails {
};
exports.EscrowBankDetails = EscrowBankDetails;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], EscrowBankDetails.prototype, "bankName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: Object.values(AccountType) }),
    __metadata("design:type", String)
], EscrowBankDetails.prototype, "accountType", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], EscrowBankDetails.prototype, "accountNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], EscrowBankDetails.prototype, "routingNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], EscrowBankDetails.prototype, "ifscCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: FileUploadSchema }),
    __metadata("design:type", FileUpload)
], EscrowBankDetails.prototype, "bankStatement", void 0);
exports.EscrowBankDetails = EscrowBankDetails = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], EscrowBankDetails);
const EscrowBankDetailsSchema = mongoose_1.SchemaFactory.createForClass(EscrowBankDetails);
let LegalDocuments = class LegalDocuments {
};
exports.LegalDocuments = LegalDocuments;
__decorate([
    (0, mongoose_1.Prop)({ type: FileUploadSchema }),
    __metadata("design:type", FileUpload)
], LegalDocuments.prototype, "llcOperatingAgreement", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: FileUploadSchema }),
    __metadata("design:type", FileUpload)
], LegalDocuments.prototype, "articlesOfAssociation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: FileUploadSchema }),
    __metadata("design:type", FileUpload)
], LegalDocuments.prototype, "memorandumOfAssociation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: FileUploadSchema }),
    __metadata("design:type", FileUpload)
], LegalDocuments.prototype, "otherDocuments", void 0);
exports.LegalDocuments = LegalDocuments = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], LegalDocuments);
const LegalDocumentsSchema = mongoose_1.SchemaFactory.createForClass(LegalDocuments);
let VotingPeriod = class VotingPeriod {
};
exports.VotingPeriod = VotingPeriod;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], VotingPeriod.prototype, "days", void 0);
__decorate([
    (0, mongoose_1.Prop)({ min: 0, max: 23 }),
    __metadata("design:type", Number)
], VotingPeriod.prototype, "hours", void 0);
exports.VotingPeriod = VotingPeriod = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], VotingPeriod);
const VotingPeriodSchema = mongoose_1.SchemaFactory.createForClass(VotingPeriod);
let GovernanceRights = class GovernanceRights {
};
exports.GovernanceRights = GovernanceRights;
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], GovernanceRights.prototype, "votingRights", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], GovernanceRights.prototype, "proposalCreation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], GovernanceRights.prototype, "adminVotePower", void 0);
exports.GovernanceRights = GovernanceRights = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], GovernanceRights);
const GovernanceRightsSchema = mongoose_1.SchemaFactory.createForClass(GovernanceRights);
let DAOConfiguration = class DAOConfiguration {
};
exports.DAOConfiguration = DAOConfiguration;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], DAOConfiguration.prototype, "daoName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], DAOConfiguration.prototype, "tokenSymbol", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: Object.values(Blockchain) }),
    __metadata("design:type", String)
], DAOConfiguration.prototype, "blockchain", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: Object.values(GovernanceModel) }),
    __metadata("design:type", String)
], DAOConfiguration.prototype, "governanceModel", void 0);
__decorate([
    (0, mongoose_1.Prop)({ min: 0, max: 100 }),
    __metadata("design:type", Number)
], DAOConfiguration.prototype, "proposalThresholdPercent", void 0);
__decorate([
    (0, mongoose_1.Prop)({ min: 0, max: 100 }),
    __metadata("design:type", Number)
], DAOConfiguration.prototype, "quorumPercent", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: VotingPeriodSchema }),
    __metadata("design:type", VotingPeriod)
], DAOConfiguration.prototype, "votingPeriod", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: GovernanceRightsSchema }),
    __metadata("design:type", GovernanceRights)
], DAOConfiguration.prototype, "governanceRights", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], DAOConfiguration.prototype, "issuerRepSignature", void 0);
exports.DAOConfiguration = DAOConfiguration = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], DAOConfiguration);
const DAOConfigurationSchema = mongoose_1.SchemaFactory.createForClass(DAOConfiguration);
let SPV = class SPV extends mongoose_2.Document {
};
exports.SPV = SPV;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], SPV.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], SPV.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SPV.prototype, "OnchainAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: Object.values(SPVType) }),
    __metadata("design:type", String)
], SPV.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 'USA' }),
    __metadata("design:type", String)
], SPV.prototype, "jurisdiction", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SPV.prototype, "blockchainCompanyId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Date)
], SPV.prototype, "formationDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], SPV.prototype, "businessPurpose", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: Object.values(CompanyStatus), default: CompanyStatus.DRAFT }),
    __metadata("design:type", String)
], SPV.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: Object.values(Currency), default: Currency.USD, required: true }),
    __metadata("design:type", String)
], SPV.prototype, "currency", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], SPV.prototype, "logo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: MemoAndTermsSchema, default: {} }),
    __metadata("design:type", MemoAndTerms)
], SPV.prototype, "memoAndTerms", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: EscrowBankDetailsSchema, default: {} }),
    __metadata("design:type", EscrowBankDetails)
], SPV.prototype, "escrowBankDetails", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: LegalDocumentsSchema, default: {} }),
    __metadata("design:type", LegalDocuments)
], SPV.prototype, "legalDocuments", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [BoardMemberSchema], default: [] }),
    __metadata("design:type", Array)
], SPV.prototype, "boardMembers", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: DAOConfigurationSchema, default: {} }),
    __metadata("design:type", DAOConfiguration)
], SPV.prototype, "daoConfiguration", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], SPV.prototype, "completedSteps", void 0);
exports.SPV = SPV = __decorate([
    (0, mongoose_1.Schema)({
        collection: 'spvs',
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (_, ret) => {
                return ret;
            },
        },
        toObject: {
            virtuals: true,
            transform: (_, ret) => {
                return ret;
            },
        },
    })
], SPV);
exports.SPVSchema = mongoose_1.SchemaFactory.createForClass(SPV);
exports.SPVSchema.index({ userId: 1 });
exports.SPVSchema.index({ name: 1 });
exports.SPVSchema.index({ type: 1, status: 1 });
exports.SPVSchema.index({ status: 1, createdAt: -1 });
exports.SPVSchema.index({ userId: 1, status: 1 });
exports.SPVSchema.index({ OnchainAddress: 1 }, { sparse: true });
exports.SPVSchema.index({ blockchainCompanyId: 1 }, { sparse: true });
exports.SPVSchema.index({ jurisdiction: 1 });
exports.SPVSchema.index({ 'boardMembers.email': 1 });
//# sourceMappingURL=spv.schema.js.map