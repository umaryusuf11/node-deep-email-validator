"use strict";
var domains = require('disposable-email-domains');
function disposable(domain) {
    //check if the domain is in the disposable email list
    return !domains.includes(domain);
}
module.exports = disposable;
//# sourceMappingURL=disposable.js.map