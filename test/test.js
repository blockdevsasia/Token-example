const token = artifacts.require("BitcoinPH");

contract('ERC20 Token Test: Synchronous', function(accounts) {
    // declare some vars from BitcoinPH.sol
    let supply = 21000000

    it("instantiate then get total supply", function () {
        return token.deployed().
        then(function(instance) {
            // get existing supply of tokens from BasicToken.sol 
            // (in node_modules/openzeppelin-solidity/contracts/token/ERC20)
            return instance.totalSupply();
        }).then(function(maxSupplyRaw) {
            // result is not yet the actual number, need to extract it
            const maxSupplyWei = maxSupplyRaw.c[0]
            console.log('maxSupplyWei: ', maxSupplyWei)
            // now convert it back to an integer from wei 
            const maxSupply = maxSupplyWei * Math.pow(10, -4);

            // test successful if maxSupply == supply, show err message if not
            assert.equal(maxSupply, supply, "tokenSupply() result != " + supply)
        })
    })
})