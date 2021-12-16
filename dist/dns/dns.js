"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const dnsPromises = require('dns').promises;
function resolveMx(domain) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const mxEntries = yield dnsPromises.resolveMx(domain);
            if (mxEntries.length > 0) {
                return Promise.resolve(true);
            }
            return Promise.resolve(false);
        }
        catch (_a) {
            return Promise.resolve(false);
        }
    });
}
module.exports = resolveMx;
//# sourceMappingURL=dns.js.map