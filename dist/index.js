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
const validateEmailRegex = require('./regex/regex');
const validateEmailTypo = require('./typo/typo');
const validateDisposable = require('./disposable/disposable');
const validateMxRecords = require('./dns/dns');
function validateEmail(email) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //checks if a string is a valid email address
            const regexTest = validateEmailRegex(email);
            if (!regexTest) {
                return Promise.resolve({
                    result: false,
                    failReason: 'invalid email address'
                });
            }
            //checks if the email may have been misspelled using the mailcheck library
            const mailCheckTest = validateEmailTypo(email);
            if (!mailCheckTest) {
                return Promise.resolve({
                    result: false,
                    failReason: 'there may be a typo in the email address'
                });
            }
            //get domain from email
            const domain = email.split('@')[1];
            //checks if the email is a disposable email domain
            const disposableTest = validateDisposable(domain);
            if (!disposableTest) {
                return Promise.resolve({
                    result: false,
                    failReason: 'email address is a disposable email address'
                });
            }
            //checks if the email has a valid MX record
            const mxRecordsTest = yield validateMxRecords(domain);
            if (!mxRecordsTest) {
                return Promise.resolve({
                    result: false,
                    failReason: 'email address domain does not have a valid MX record'
                });
            }
            //if all tests pass, the email is valid
            return Promise.resolve({
                result: regexTest && mailCheckTest && disposableTest && mxRecordsTest,
                failReason: null
            });
        }
        catch (error) {
            return Promise.reject(error);
        }
    });
}
module.exports = validateEmail;
//# sourceMappingURL=index.js.map