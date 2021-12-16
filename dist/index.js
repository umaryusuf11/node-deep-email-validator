"use strict";
var validateEmailRegex = require('./regex/regex');
var validateEmailTypo = require('./typo/typo');
var validateDisposable = require('./disposable/disposable');
function validateEmail(email) {
    //checks if a string is a valid email address
    var regexTest = validateEmailRegex(email);
    //checks if the email may have been misspelled using the mailcheck library
    //TODO: PROMISIFY THIS
    var mailCheckTest = validateEmailTypo(email);
    //checks if the email is a disposable email
    var disposableTest = validateDisposable(email);
    return regexTest && mailCheckTest && disposableTest;
}
module.exports = validateEmail;
//# sourceMappingURL=index.js.map