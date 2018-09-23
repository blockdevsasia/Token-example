import Web3 from 'web3'
import {address, ABI} from './constants/BitcoinPHContract'


let getContract = new Promise(function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)
  let tokenContract = web3.eth.contract(ABI)
  let tokenContractInstance = tokenContract.at(address)
  console.log(tokenContract)
  console.log(tokenContractInstance)
  resolve(tokenContractInstance)
})

export default getContract
