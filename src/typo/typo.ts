var Mailcheck = require('mailcheck');

function mailCheck(email: string): boolean {
    return Mailcheck.run({
        email: email,
        suggested: function(suggestion:any) {
            return false;
          },
          empty: function() {
            return true;
          }
    });
}

module.exports = mailCheck;
