var BitcoinPH = artifacts.require("./BitcoinPH.sol");

module.exports = function(deployer) {
  deployer.deploy(BitcoinPH);
};