let bip39 = require("bip39");
let Hdkey = require("hdkey");
var ethUtil = require('ethereumjs-util');
 
 
console.clear();
(async () => {
    let seed = await bip39.mnemonicToSeed("mule excess develop depart large trade proud corn noise dose service fine")
    console.log(seed);
    const hdkey = await Hdkey.fromMasterSeed(seed);
    console.log(hdkey);
    let privateKey = hdkey.privateKey.toString("hex");
    let publicKey = hdkey.publicKey.toString("hex");
 
    const addrnode = hdkey.derive("m/44'/0'/0'/0/0");
    // const addrnode = hdkey.derive("m/44'/60'/0'/0");
    const pubKey = ethUtil.privateToPublic(addrnode._privateKey);
    let addr = '0x' + ethUtil.publicToAddress(pubKey).toString('hex');
    console.log("addr", addr);
    console.log("pubKey", pubKey.toString("hex"));
    console.log("publicKey goc", publicKey);
    console.log("privateKey goc", privateKey);
    console.log("publicKey derive", addrnode._publicKey.toString("hex"));
    console.log("privateKey derive", addrnode._privateKey.toString("hex"));
})();