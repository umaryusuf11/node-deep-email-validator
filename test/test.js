const valiateEmail = require("../dist");
async function main() {
    //for regex test
    console.log("regex fail");
    const e1 = "a";
    const r1 = await valiateEmail(e1);
    console.log(r1);
    const e2 = "a@a";
    const r2 = await valiateEmail(e2);
    console.log(r2);
    console.log(" ");
    
    //for mailcheck test
    console.log("mailcheck fail");
    const e3 = "a@gmal.com";
    const r3 = await valiateEmail(e3);
    console.log(r3);
    console.log(" ")
    
    //for disposable email test
    console.log("disposable email fail");
    const e4 = "mavaf22039@mailinator.com"
    const r4 = await valiateEmail(e4);
    console.log(r4);
    console.log(" ")

    //for mx records test
    console.log("mx records fail");
    const e5 = "abc@fluffycoin.org"
    const r5 = await valiateEmail(e5);
    console.log(r5);
    console.log(" ")
    
    //valid email
    console.log("valid email");
    const eLast = "a@gmail.com";
    const rLast = await valiateEmail(eLast);
    console.log(rLast);
    
    
    
    

}

main();