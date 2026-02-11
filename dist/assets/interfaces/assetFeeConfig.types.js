"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STATIC_INSURANCE_FEE_CONFIG = exports.STATIC_RESERVE_FEE_CONFIG = exports.FeeType = void 0;
var FeeType;
(function (FeeType) {
    FeeType["REGISTRATION"] = "registration";
    FeeType["LEGAL"] = "legal";
    FeeType["PLATFORM"] = "platform";
    FeeType["BROKERAGE"] = "brokerage";
    FeeType["RESERVE"] = "reserve";
    FeeType["INSURANCE"] = "insurance";
})(FeeType || (exports.FeeType = FeeType = {}));
exports.STATIC_RESERVE_FEE_CONFIG = {
    type: FeeType.RESERVE,
    name: "Reserve Fee",
    value: 1,
    isPercentage: true,
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
};
exports.STATIC_INSURANCE_FEE_CONFIG = {
    type: FeeType.INSURANCE,
    name: "Insurance On Title Deeds",
    value: 1,
    isPercentage: true,
    status: true,
    createdAt: new Date(),
    updatedAt: new Date(),
};
//# sourceMappingURL=assetFeeConfig.types.js.map