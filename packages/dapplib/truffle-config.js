require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess gloom system tragic name repeat saddle assault harvest nasty equal gauge'; 
let testAccounts = [
"0x99b43ba26ace9d44a903c71600bd895f4534f3ba40838e400ac31629ce006d69",
"0xab06bb9b4f1295339f3221ad58ecc56eef3957f77efd51a52ecc022af6592450",
"0x0a1851aea64ee13ab3537718e2d84749811fbf035361b029c0cf5e0550d2e150",
"0xca7410a796456d19e82542f091c549d36f9e5ff75f78f522339b7b3c8771f39d",
"0xf34644fffce7f1ba4617fbe2f8a1bbc77073ffc44898e5fcf8eba91baf5614ee",
"0x18747c9919c07d50203997e2c8a56c6af7a4684d25d6048bc92cae066e727f32",
"0x59d689b2e89f8ffe864334f6ae673f003c8d3c8bd6ef7032b4cb9304bbfabafb",
"0x9f2818eadf272e77183750a84799b7216f5421a584b324da8e3314795af13bfd",
"0x6115899ba91e23deb1b44cac0ae34a82de096abaf5ca9c77f678113e2172dcd6",
"0xaa1f57a1688a31db29a3e0c1699d382aafe9b9de0eb06f0b1d4be2da04406d5b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

