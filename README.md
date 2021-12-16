# NodeJS Email Validator

[![NPM](https://nodei.co/npm/node-deep-email-validator.png)](https://nodei.co/npm/node-deep-email-validator/)

This is based on [deep-email-validator](https://nodei.co/npm/deep-email-validator/)
Validates email addresses based on regex, common typos, disposable email blacklists and DNS records.

- Validates email looks like an email i.e. contains an "@" and a "." to the right of it using RegEx.
- Validates common typos e.g. example@gmaill.com using [mailcheck](https://github.com/mailcheck/mailcheck).
- Validates email was not generated by disposable email service using [disposable-email-domains](https://github.com/ivolo/disposable-email-domains).
- Validates MX records are present on DNS.


## Getting Started

Comaptible with nodejs only. Not browser ready.

Install like so

```
npm i node-deep-email-validator --save
```

Use like so

```typescript
const validateEmail = require('node-deep-email-validator');
async function main(){
  const valid = await validate('example@yourdomain.com');
  // YOUR CODE HERE
}
```
