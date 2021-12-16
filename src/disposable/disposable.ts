var domains:Array<String> = require('disposable-email-domains');


function disposable(domain:string): boolean {
    //check if the domain is in the disposable email list
    return !domains.includes(domain);
}

module.exports = disposable;