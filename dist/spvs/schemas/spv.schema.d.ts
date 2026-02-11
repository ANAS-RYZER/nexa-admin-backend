import { Document, HydratedDocument } from 'mongoose';
export type SPVDocument = HydratedDocument<SPV>;
export declare enum SPVType {
    LLC = "LLC",
    LP = "LP",
    TRUST = "Trust",
    CORPORATION = "Corporation"
}
export declare enum AccountType {
    SAVINGS = "Savings",
    CHECKING = "Checking",
    CURRENT = "Current",
    ESCROW = "Escrow"
}
export declare enum Role {
    DIRECTOR = "Director",
    ASSET_MANAGER = "Asset Manager",
    INVESTOR_MANAGER = "Investor Manager"
}
export declare enum Blockchain {
    ETHEREUM = "Ethereum",
    POLYGON = "Polygon",
    BINANCE_SMART_CHAIN = "Binance Smart Chain",
    XRPL = "XRPL"
}
export declare enum GovernanceModel {
    TOKEN_BASED = "Token-Weighted",
    EQUAL_WEIGHTED = "Equal-Voting",
    REPUTATION = "Reputation"
}
export declare enum CompanyStatus {
    DRAFT = "Draft",
    PENDING = "Pending",
    APPROVAL = "Approval",
    REJECTED = "Rejected",
    ACTIVE = "Active",
    INACTIVE = "Inactive"
}
export declare enum Currency {
    USD = "USD",
    EUR = "EUR",
    GBP = "GBP",
    INR = "INR",
    AED = "AED"
}
export declare class FileUpload {
    name?: string;
    url?: string;
}
export declare class BoardMember {
    fullName: string;
    email: string;
    countryCode?: string;
    phoneNumber: string;
    idNumber: string;
    idProof?: FileUpload;
    role: Role;
}
export declare class MemoAndTerms {
    investmentMemorandum?: string;
    termsAndConditions?: string;
    riskFactor?: string;
    investmentStrategy?: string;
}
export declare class EscrowBankDetails {
    bankName?: string;
    accountType?: AccountType;
    accountNumber?: string;
    routingNumber?: string;
    ifscCode?: string;
    bankStatement?: FileUpload;
}
export declare class LegalDocuments {
    llcOperatingAgreement?: FileUpload;
    articlesOfAssociation?: FileUpload;
    memorandumOfAssociation?: FileUpload;
    otherDocuments?: FileUpload;
}
export declare class VotingPeriod {
    days?: number;
    hours?: number;
}
export declare class GovernanceRights {
    votingRights?: boolean;
    proposalCreation?: boolean;
    adminVotePower?: boolean;
}
export declare class DAOConfiguration {
    daoName?: string;
    tokenSymbol?: string;
    blockchain?: Blockchain;
    governanceModel?: GovernanceModel;
    proposalThresholdPercent?: number;
    quorumPercent?: number;
    votingPeriod?: VotingPeriod;
    governanceRights?: GovernanceRights;
    issuerRepSignature?: boolean;
}
export declare class SPV extends Document {
    userId: string;
    name: string;
    OnchainAddress?: string;
    type: SPVType;
    jurisdiction: string;
    blockchainCompanyId?: string;
    formationDate: Date;
    businessPurpose: string;
    status: CompanyStatus;
    currency: Currency;
    logo?: string;
    memoAndTerms?: MemoAndTerms;
    escrowBankDetails?: EscrowBankDetails;
    legalDocuments?: LegalDocuments;
    boardMembers: BoardMember[];
    daoConfiguration?: DAOConfiguration;
    completedSteps: string[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const SPVSchema: import("mongoose").Schema<SPV, import("mongoose").Model<SPV, any, any, any, Document<unknown, any, SPV, any, {}> & SPV & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, SPV, Document<unknown, {}, import("mongoose").FlatRecord<SPV>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<SPV> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
