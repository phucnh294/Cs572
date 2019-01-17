const dns = require('dns');
const {promisify} = require('util');
const domain = "mum.edu";

var mum = dns.resolve4(domain, function (err, addresses, family) {
  console.log("1: " + addresses.toString());
});

const dnsAsync = promisify(dns.resolve4);
dnsAsync(domain)
.then(text=>{console.log("2: " + text.toString())})
.catch(err=>{console.log(err)});

async function AsyncAwait(){
  try{
    const ipAddres=  await dnsAsync(domain);
    console.log("3: " + ipAddres.toString())
  }catch(err){
    console.log("Error: " + err);
  }
}
AsyncAwait();