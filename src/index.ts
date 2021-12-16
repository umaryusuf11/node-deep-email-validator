const validateEmailRegex = require('./regex/regex');
const validateEmailTypo = require('./typo/typo');
const validateDisposable = require('./disposable/disposable');
const validateMxRecords = require('./dns/dns');

async function validateEmail(email:string): Promise<any>{
    try {        
        //checks if a string is a valid email address
        const regexTest = validateEmailRegex(email);
        if(!regexTest) { return Promise.resolve({
            result:false,
            failReason:'invalid email address'
        }); }
        
        //checks if the email may have been misspelled using the mailcheck library
        const mailCheckTest = validateEmailTypo(email);
        if(!mailCheckTest) { return Promise.resolve({
            result:false,
            failReason:'there may be a typo in the email address'
        }); }
        
        //get domain from email
        const domain = email.split('@')[1];
    
        //checks if the email is a disposable email domain
        const disposableTest = validateDisposable(domain);
        if(!disposableTest) { return Promise.resolve({
            result:false,
            failReason:'email address is a disposable email address'
        });}
    
        //checks if the email has a valid MX record
        const mxRecordsTest = await validateMxRecords(domain);
        if(!mxRecordsTest) { return Promise.resolve({
            result:false,
            failReason:'email address domain does not have a valid MX record'
        }); }

        //if all tests pass, the email is valid
        return Promise.resolve({
            result: regexTest && mailCheckTest && disposableTest && mxRecordsTest,
            failReason:null
        });
        
    } catch (error:any) {
        return Promise.reject(error);   
    }
}

module.exports = validateEmail;