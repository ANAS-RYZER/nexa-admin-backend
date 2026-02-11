"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetStatus = exports.EKycOrAmlRequirements = exports.EInvestorAcreditation = exports.Currency = exports.LockInPeriodType = exports.AssetStyle = exports.AssetStage = exports.AssetCategory = exports.InstrumentType = exports.AssetClass = void 0;
var AssetClass;
(function (AssetClass) {
    AssetClass["COMMODITY"] = "commodity";
    AssetClass["HARDWARE"] = "hardware";
    AssetClass["EQUITY"] = "equity";
    AssetClass["DEBT"] = "debt";
    AssetClass["REAL_ESTATE"] = "real-estate";
    AssetClass["FUND"] = "fund";
    AssetClass["GOODS"] = "goods";
    AssetClass["IP_AND_LICENSES"] = "ip-and-licenses";
})(AssetClass || (exports.AssetClass = AssetClass = {}));
var InstrumentType;
(function (InstrumentType) {
    InstrumentType["EQUITY"] = "equity";
    InstrumentType["DIRECT_OWNERSHIP"] = "direct-ownership";
    InstrumentType["DEBT"] = "debt";
    InstrumentType["FUND"] = "fund";
})(InstrumentType || (exports.InstrumentType = InstrumentType = {}));
var AssetCategory;
(function (AssetCategory) {
    AssetCategory["COMMERCIAL"] = "commercial";
    AssetCategory["HOLIDAY_HOMES"] = "holiday-homes";
    AssetCategory["RESIDENTIAL"] = "residential";
    AssetCategory["LAND_PARCEL"] = "land-parcel";
})(AssetCategory || (exports.AssetCategory = AssetCategory = {}));
var AssetStage;
(function (AssetStage) {
    AssetStage["UNDER_CONSTRUCTION"] = "under-construction";
    AssetStage["READY_TO_MOVE"] = "ready-to-move";
    AssetStage["COMPLETED"] = "completed";
    AssetStage["RENOVATED"] = "renovated";
    AssetStage["FULLY_RENTED"] = "fully-rented";
    AssetStage["FULLY_SOLD"] = "fully-sold";
    AssetStage["ON_HOLD"] = "on-hold";
    AssetStage["CANCELLED"] = "cancelled";
    AssetStage["ON_SALE"] = "on-sale";
    AssetStage["ON_LEASE"] = "on-lease";
})(AssetStage || (exports.AssetStage = AssetStage = {}));
var AssetStyle;
(function (AssetStyle) {
    AssetStyle["TOWER"] = "tower";
    AssetStyle["VILLA"] = "villa";
    AssetStyle["BUILDING"] = "building";
    AssetStyle["DEVELOPED_LAND"] = "developed-land";
    AssetStyle["INDIVIDUAL_LAND"] = "individual-land";
})(AssetStyle || (exports.AssetStyle = AssetStyle = {}));
var LockInPeriodType;
(function (LockInPeriodType) {
    LockInPeriodType["MONTH"] = "months";
    LockInPeriodType["YEAR"] = "year";
})(LockInPeriodType || (exports.LockInPeriodType = LockInPeriodType = {}));
var Currency;
(function (Currency) {
    Currency["INR"] = "INR";
    Currency["USD"] = "USD";
    Currency["GBP"] = "GBP";
    Currency["AED"] = "AED";
    Currency["QAR"] = "QAR";
    Currency["SGD"] = "SGD";
    Currency["EUR"] = "EUR";
    Currency["CAD"] = "CAD";
    Currency["CHF"] = "CHF";
    Currency["AUD"] = "AUD";
    Currency["NZD"] = "NZD";
    Currency["ZAR"] = "ZAR";
    Currency["MXN"] = "MXN";
    Currency["BRL"] = "BRL";
    Currency["CNY"] = "CNY";
    Currency["HKD"] = "HKD";
    Currency["JPY"] = "JPY";
    Currency["KRW"] = "KRW";
    Currency["SAR"] = "SAR";
    Currency["USDT"] = "USDT";
    Currency["USDC"] = "USDC";
})(Currency || (exports.Currency = Currency = {}));
var EInvestorAcreditation;
(function (EInvestorAcreditation) {
    EInvestorAcreditation["OPEN_TO_ALL"] = "open-to-all";
    EInvestorAcreditation["ACCREDITED_ONLY"] = "accredited-only";
    EInvestorAcreditation["INSTITUTIONAL_ONLY"] = "institutional-only";
    EInvestorAcreditation["QUALIFIED"] = "qualified";
    EInvestorAcreditation["CUSTOM_APPROVAL"] = "custom-approval";
})(EInvestorAcreditation || (exports.EInvestorAcreditation = EInvestorAcreditation = {}));
var EKycOrAmlRequirements;
(function (EKycOrAmlRequirements) {
    EKycOrAmlRequirements["REQUIRED_FOR_ALL"] = "required-for-all";
    EKycOrAmlRequirements["ACCREDITED_ONLY"] = "accredited-only";
    EKycOrAmlRequirements["ENHANCED"] = "enhanced";
    EKycOrAmlRequirements["OPTIONAL"] = "optional";
    EKycOrAmlRequirements["NONE"] = "none";
})(EKycOrAmlRequirements || (exports.EKycOrAmlRequirements = EKycOrAmlRequirements = {}));
var AssetStatus;
(function (AssetStatus) {
    AssetStatus["ACTIVE"] = "active";
    AssetStatus["INACTIVE"] = "inactive";
    AssetStatus["Draft"] = "draft";
    AssetStatus["APPROVED"] = "approved";
    AssetStatus["REJECTED"] = "rejected";
    AssetStatus["PENDING"] = "pending";
})(AssetStatus || (exports.AssetStatus = AssetStatus = {}));
//# sourceMappingURL=asset.type.js.map