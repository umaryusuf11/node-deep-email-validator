"use strict";
var Mailcheck = require('mailcheck');
function mailCheck(email) {
    return Mailcheck.run({
        email: email,
        suggested: function (suggestion) {
            return false;
        },
        empty: function () {
            return true;
        }
    });
}
module.exports = mailCheck;
//# sourceMappingURL=mailcheck.js.map