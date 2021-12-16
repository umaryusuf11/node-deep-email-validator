"use strict";
var validateEmailRegex = require('./regex/regex');
function validateEmail(email) {
    var regexTest = validateEmailRegex(email);
    return regexTest;
}
module.exports = validateEmail;
//# sourceMappingURL=index.js.map