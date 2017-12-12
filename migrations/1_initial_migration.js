var Migrations = artifacts.require("./Migrations.sol");
var SimpleToken = artifacts.require("./SimpleToken.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(SimpleToken);
};