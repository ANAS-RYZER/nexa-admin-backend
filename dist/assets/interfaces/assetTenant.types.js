"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantType = exports.TenantStatus = void 0;
var TenantStatus;
(function (TenantStatus) {
    TenantStatus["ACTIVE"] = "active";
    TenantStatus["INACTIVE"] = "inactive";
    TenantStatus["PENDING"] = "pending";
})(TenantStatus || (exports.TenantStatus = TenantStatus = {}));
var TenantType;
(function (TenantType) {
    TenantType["CORPORATE"] = "corporate";
    TenantType["INDIVIDUAL"] = "individual";
    TenantType["GOVERNMENT"] = "government";
    TenantType["EDUCATIONAL"] = "educational";
    TenantType["RETAIL"] = "retail";
    TenantType["OTHER"] = "other";
})(TenantType || (exports.TenantType = TenantType = {}));
//# sourceMappingURL=assetTenant.types.js.map