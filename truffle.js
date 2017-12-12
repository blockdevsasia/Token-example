require('dotenv').config();
const Web3 = require("web3");
const web3 = new Web3();
const WalletProvider = require("truffle-wallet-provider");
const Wallet = require('ethereumjs-wallet');

/*var mainNetPrivateKey = new Buffer(process.env["0x627306090abab3a6e1400e9345bc60c78a8bef57"], "hex")
var mainNetWallet = Wallet.fromPrivateKey(mainNetPrivateKey);
var mainNetProvider = new WalletProvider(mainNetWallet, "https://mainnet.infura.io/");

var ropstenPrivateKey = new Buffer(process.env["0x627306090abab3a6e1400e9345bc60c78a8bef57"], "hex")
var ropstenWallet = Wallet.fromPrivateKey(ropstenPrivateKey);
var ropstenProvider = new WalletProvider(ropstenWallet, "https://ropsten.infura.io/");
*/
var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat"

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/8GNEGohUxuT02DLFZdRB")
      },
      network_id: 3,
      gas: 4600000,
      gasPrice: web3.toWei("20", "gwei"),
    },
    /*mainnet: {
      provider: mainNetProvider,
      gas: 4600000,
      gasPrice: web3.toWei("20", "gwei"),
      network_id: "1",
    }*/
  }
};