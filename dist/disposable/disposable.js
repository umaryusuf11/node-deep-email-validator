"use strict";
var domains = require('disposable-email-domains');
function disposable(email) {
    //get the domain from the email
    var domain = email.split('@')[1];
    //check if the domain is in the disposable email list
    return !domains.includes(domain);
}
module.exports = disposable;
//# sourceMappingURL=disposable.js.map