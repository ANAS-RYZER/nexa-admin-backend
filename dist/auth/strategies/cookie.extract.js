"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieExtractor = void 0;
const cookieExtractor = (req) => {
    if (req && req.cookies) {
        return req.cookies['access_token'] || null;
    }
    return null;
};
exports.cookieExtractor = cookieExtractor;
//# sourceMappingURL=cookie.extract.js.map