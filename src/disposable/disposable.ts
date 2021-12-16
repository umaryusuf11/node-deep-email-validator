var domains:Array<String> = require('disposable-email-domains');


function disposable(email:string): boolean {
    //get the domain from the email
    const domain = email.split('@')[1];
    //check if the domain is in the disposable email list
    return !domains.includes(domain);
}

module.exports = disposable;