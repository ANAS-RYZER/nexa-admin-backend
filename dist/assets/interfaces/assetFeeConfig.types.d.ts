export declare enum FeeType {
    REGISTRATION = "registration",
    LEGAL = "legal",
    PLATFORM = "platform",
    BROKERAGE = "brokerage",
    RESERVE = "reserve",
    INSURANCE = "insurance"
}
export interface IAssetFeeConfig {
    assetId: string;
    type: FeeType;
    name: string;
    value: number;
    isPercentage: boolean;
    status: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
export declare const STATIC_RESERVE_FEE_CONFIG: Omit<IAssetFeeConfig, "assetId">;
export declare const STATIC_INSURANCE_FEE_CONFIG: Omit<IAssetFeeConfig, "assetId">;
