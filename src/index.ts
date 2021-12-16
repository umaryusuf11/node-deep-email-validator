const validateEmailRegex = require('./regex/regex');
const validateEmailTypo = require('./typo/typo');
const validateDisposable = require('./disposable/disposable');
const validateMxRecords = require('./dns/dns');

async function validateEmail(email:string): Promise<Boolean> {
    try {        
        //checks if a string is a valid email address
        const regexTest = validateEmailRegex(email);
        if(!regexTest) { return Promise.resolve(false); }
        
        //checks if the email may have been misspelled using the mailcheck library
        //TODO: PROMISIFY THIS
        const mailCheckTest = validateEmailTypo(email);
        if(!mailCheckTest) { return Promise.resolve(false); }
        
        //get domain from email
        const domain = email.split('@')[1];
    
        //checks if the email is a disposable email domain
        const disposableTest = validateDisposable(domain);
        if(!disposableTest) { return Promise.resolve(false); }
    
        const mxRecordsTest = await validateMxRecords(domain);
        if(!mxRecordsTest) { return Promise.resolve(false); }

        return Promise.resolve(regexTest && mailCheckTest && disposableTest && mxRecordsTest);
    } catch (error:any) {
        return Promise.reject(error);   
    }
}

module.exports = validateEmail;