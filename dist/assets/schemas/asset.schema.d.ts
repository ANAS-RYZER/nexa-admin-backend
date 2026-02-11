import { Document, HydratedDocument, Schema as MongooseSchema } from "mongoose";
import { AssetClass, AssetCategory, AssetStyle, LockInPeriodType, AssetStage, InstrumentType, Currency, AssetStatus, EInvestorAcreditation, EKycOrAmlRequirements } from "../interfaces/asset.type";
export type AssetDocument = HydratedDocument<Asset>;
export declare class Asset extends Document {
    issuerId?: MongooseSchema.Types.ObjectId;
    spvId: MongooseSchema.Types.ObjectId;
    class?: AssetClass;
    category?: AssetCategory;
    stage?: AssetStage;
    style?: AssetStyle;
    currency: Currency;
    instrumentType: InstrumentType;
    metadata?: Record<string, any>;
    assetAddress?: string;
    status: AssetStatus;
    bookmarks: number;
    name?: string;
    about?: string;
    country?: string;
    state?: string;
    city?: string;
    landmark?: string;
    latitude?: number;
    longitude?: number;
    hasGlobalFeePercentagesSynced: boolean;
    hasGlobalFAQsSynced: boolean;
    hasGlobalRiskFactorsSynced: boolean;
    hasGlobalRiskDisclosuresSynced: boolean;
    hasGlobalAdditionalTaxesSynced: boolean;
    hasGlobalExitOpportunitiesSynced: boolean;
    totalNumberOfSfts: number;
    pricePerSft: number;
    basePropertyValue: number;
    totalPropertyValueAfterFees: number;
    investmentPerformance?: {
        targetCapitalAppreciation: number;
        numberOfYears: number;
        netInvestmentMultiplier: number;
        estimatedSalePriceAsPerLockInPeriod: number;
        capitalGains: number;
        capitalGainsTax: number;
        estimatedReturnsAsPerLockInPeriod: number;
        interestRateonReserves: number;
        netRentalYield: number;
        grossRentalYield: number;
        irr: number;
        moic: number;
        latestPropertyValue: number;
        latestPropertyValueDate: Date | null;
    };
    investorRequirementsAndTimeline?: {
        investorAcreditation: EInvestorAcreditation;
        kycOrAmlRequirements: EKycOrAmlRequirements;
        lockupPeriod: number;
        lockupPeriodType: LockInPeriodType;
        rentalYield: number;
        distributionStartDate: Date | null;
        distributionEndDate: Date | null;
    };
    rentalInformation?: {
        rentPerSft: number;
        vacancyRate: number;
        grossMonthlyRent: number;
        netMonthlyRent: number;
        grossAnnualRent: number;
        netAnnualRent: number;
        expenses: {
            monthlyExpenses: number;
            annualExpenses: number;
        };
        netCashFlow: number;
    };
    escrowInformation?: {
        country: string;
        state: string;
        escrowBank: string;
        escrowAgent: string;
    };
    legalAdivisory?: {
        name: string;
        document?: {
            name: string;
            url: string;
        } | null;
    };
    assetManagementCompany?: {
        name: string;
        document?: {
            name: string;
            url: string;
        } | null;
    };
    brokerage?: {
        name: string;
        document?: {
            name: string;
            url: string;
        } | null;
    };
    loanInformation?: {
        hasAssetPossesLoan: boolean;
        currentLoanAmount: number;
        totalNumberOfYears: number;
        totalLoanAmount: number;
        numberOfEMIsYetToPay: number;
        interestRate: number;
        pendingLoanAmount: number;
        bankName: string;
        brankBranch: string;
    };
    tokenInformation?: {
        tokenSymbol: string | null;
        tokenSupply: number;
        minimumTokensToBuy: number;
        maximumTokensToBuy: number;
        availableTokensToBuy: number;
        tokenPrice: number;
        blockchainProjectAddress: string | null;
        blockchainEscrowAddress: string | null;
        blockchainOrderManagerAddress: string | null;
        blockchainDaoAddress: string | null;
    };
    media?: {
        imageURL: string;
        videoURL: string;
        gallery: string[];
        pitchDeckURL: string;
    };
    hostedBy?: {
        name: string;
        isVerified: boolean;
        address: string;
        phone: string;
        email: string;
        website: string;
        logoURL: string;
        whatsappNumber: string;
        totalProjects: number;
        onGoingProjects: number;
        primeLocation: string;
        about: string;
        yearEstablished: number | null;
    };
    totalFundsRaised: number;
    signatureDocuments: MongooseSchema.Types.ObjectId[];
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const AssetSchema: MongooseSchema<Asset, import("mongoose").Model<Asset, any, any, any, Document<unknown, any, Asset, any, {}> & Asset & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Asset, Document<unknown, {}, import("mongoose").FlatRecord<Asset>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<Asset> & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}>;
