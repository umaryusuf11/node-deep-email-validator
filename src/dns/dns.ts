const dnsPromises = require('dns').promises;

async function resolveMx(domain:string): Promise<Boolean> {
    try{
        const mxEntries = await dnsPromises.resolveMx(domain);
        if(mxEntries.length > 0) {
            return Promise.resolve(true);
        }
        return Promise.resolve(false);
    }catch{
        return Promise.resolve(false);
    }
}

module.exports = resolveMx;