const validateEmailRegex = require('./regex/regex');


function validateEmail(email:string): boolean {
    const regexTest = validateEmailRegex(email);
    return regexTest;
}

module.exports = validateEmail;