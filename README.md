# Token-example

## This token example repo is primarily a community code repo for BlockDevs Asia and has not been thoroughly tested for production use - implement at your own risk. 

1. . Install/Load Tools
    1. Metamask extension on Chrome
        1. https://faucet.metamask.io/    - Get test ETH coins (needed to deploy your contract)
        2. https://ropsten.etherscan.io/  - Ropsten testnet

    2. Remix Web IDE - https://remix.ethereum.org/#optimize=true&version=soljson-v0.4.24+commit.e67f0147.js 
        1. Easy to use IDE w clickable smart contract interface for quick testing
        2. Good for a few files of smart contracts, for interaction w front end frameworks, check out links. Anything beyond a few files, you need a local environment

2. Simple exercise: Let’s recreate (a simple version of) Bitcoin on the Ethereum blockchain!
    1. https://github.com/blockdevsasia/Token-example/blob/master/contracts/BitcoinPH.sol * Inherits from OpenZeppelin 
    2. Paste the code in the link above into Remix
    3. (after you get it to work on your own :-) ): Open Remix through this link: http://remix.ethereum.org/#version=soljson-v0.4.25+commit.59dbf8f1.js&optimize=true&gist=1993e710996caad48e783a56c14993a2 and select the gist in the left menu, and then compile.

3. Follow STEP 3 ONWARDS https://steemit.com/ethereum/@maxnachamkin/how-to-create-your-own-ethereum-token-in-an-hour-erc20-verified 


## You're done! Finished early? Try setting up your own environment!
1. Install an IDE (recommended: https://code.visualstudio.com/)
2. https://github.com/blockdevsasia/ethdev_docker 
2. clone https://github.com/blockdevsasia/Token-example into the *apps* folder (do this for any dApp you want to build from now on)
3. Run 'ganache-cli' to start node OR download Ganache UI https://www.truffleframework.com/ganache 
4. Run 'truffle migrate' then 'truffle test' in root to make sure everything was copied properly

Sample dApps:
http://truffleframework.com/tutorials/ 
https://github.com/truffle-box 


## Next meeting: Build your own Ethereum game with PhaserJS and VueJS for the front end
https://github.com/blockdevsasia/samplepacman-eth 

Further Reading:
1. https://media.consensys.net/ethon-introducing-semantic-ethereum-15f1f0696986
2. How to verify your token: https://steemit.com/ethereum/@maxnachamkin/how-to-create-your-own-ethereum-token-in-an-hour-erc20-verified
3. http://solidity.readthedocs.io/en/develop/contracts.html
4. OpenZeppelin (Community audited best practices) https://github.com/OpenZeppelin/openzeppelin-solidity, https://openzeppelin.org/api/docs/get-started.html 
