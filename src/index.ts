const validateEmailRegex = require('./regex/regex');
const validateEmailTypo = require('./typo/typo');
const validateDisposable = require('./disposable/disposable');

function validateEmail(email:string): boolean {
    //checks if a string is a valid email address
    const regexTest = validateEmailRegex(email);

    //checks if the email may have been misspelled using the mailcheck library
    //TODO: PROMISIFY THIS
    const mailCheckTest = validateEmailTypo(email);

    //checks if the email is a disposable email
    const disposableTest = validateDisposable(email);

    return regexTest && mailCheckTest && disposableTest;
}

module.exports = validateEmail;