pragma solidity ^0.4.18;

import './StandardToken.sol';

/**
 * @title SimpleToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `StandardToken` functions.
 */
contract BitcoinPH is StandardToken {

  // just change the following 4 variables to create your own token!
  string public constant name = "Bitcoin Philippines";
  string public constant symbol = "BTCPH";
  uint8 public constant decimals = 18;

  uint256 public constant INITIAL_SUPPLY = 21000000 * (10 ** uint256(decimals));

  /**
   * @dev Constructor that gives msg.sender all of existing tokens.
   */
  function BitcoinPH() public {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }

}