let bip39 = require("bip39");
let ethUtil = require('ethereumjs-util');
let bitcoin = require('bitcoinjs-lib');
let bip32 = require('bip32');
 
console.clear();
(async () => {
    console.clear()
    let seed = await bip39.mnemonicToSeed("ripple scissors kick mammal hire column oak again sun offer wealth tomorrow wagon turn fatal")
    let node = bip32.fromSeed(seed)
    let childETH = node.derivePath("m/44'/60'/0'/0/0")
    let childBTC = node.derivePath("m/84'/0'/0'/0/0")
 
    console.log("addr eth", '0x' + ethUtil.privateToAddress(childETH.privateKey).toString('hex'));
    console.log("publicKey", childETH.publicKey.toString('hex'));
    console.log("privateKey", childETH.privateKey.toString('hex'));
 
 
    console.log("btc adr", bitcoin.payments.p2wpkh({ pubkey: childBTC.publicKey }).address);
    console.log("wif", childBTC.toWIF());
    console.log("publicKey", childBTC.publicKey.toString("hex"));
    console.log("privateKey", childBTC.privateKey.toString("hex"));
 
})();