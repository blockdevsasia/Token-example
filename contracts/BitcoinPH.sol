pragma solidity 0.4.24;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/MintableToken.sol";


/**
 * @title SimpleToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `StandardToken` functions.
 *
 * if using remix web IDE, change 'MintableToken' to 'ERC20Mintable'
 * openzeppelin source repo is more updated than npm package
 */
contract BitcoinPH is MintableToken {

    // just change the following 4 variables to create your own token!
    string public constant name = "BitcoinPH";
    string public constant symbol = "BTCPH";
    uint8 public constant decimals = 18;

    constructor (uint256 _supply) public {
        uint256 initSupply = _supply * (10 ** uint256(decimals));
        mint(msg.sender, initSupply);
        finishMinting();
    }

}
