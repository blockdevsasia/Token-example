var fs = require('fs');

var BitcoinPH = artifacts.require("./BitcoinPH.sol");

// Run this function async so we can use the cleaner "await" syntax within
module.exports = async function(deployer) {
  // Deploy our token
  await deployer.deploy(BitcoinPH, 21000000)

  // Get a handle of the deployed instance so we can read stuff from it
  instance = await BitcoinPH.deployed()

  // Assemble the constants javascript file from the instance object
  fileContent = "const address = '" + instance.address + "';\n"
  fileContent += "const ABI = " + JSON.stringify(instance.abi) + ";\n"
  fileContent += "export {address, ABI};"

  // Build the filepath for the constants file
  let filepath = "./src/util/constants/" + instance.constructor.contractName + "Contract.js"

  // Write the file
  fs.writeFile(filepath, fileContent, (err) => {
    if (err) throw err;
  });

};
