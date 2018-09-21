var Migrations = artifacts.require("./Migrations.sol");
//var BitcoinPH = artifacts.require("./BitcoinPH.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};