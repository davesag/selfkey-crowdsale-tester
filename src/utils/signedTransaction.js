import HttpProvider from 'ethjs-provider-http'
import Eth from 'ethjs-query'
import Web3 from 'web3'
import signer from 'ethjs-signer'
import BigNumber from 'bignumber.js'

import { PRIVATE_KEY, ETH_PROVIDER_URL, GAS, GAS_PRICE } from '../constants'

const { sign } = signer
const eth = new Eth(new HttpProvider(ETH_PROVIDER_URL))
const web3 = new Web3(new Web3.providers.HttpProvider(ETH_PROVIDER_URL))

const signedTransaction = (abi, contractAddress, owner) => {
  const contract = new web3.eth.Contract(abi, owner)
  const { methods } = contract

  return async (fnName, ...params) => {
    const nonce = await eth.getTransactionCount(owner)
    const data = methods[fnName](...params).encodeABI()
    const wrapper = {
      to: contractAddress,
      gas: new BigNumber(GAS),
      gasPrice: new BigNumber(GAS_PRICE),
      data,
      nonce
    }
    eth.sendRawTransaction(sign(wrapper, PRIVATE_KEY))
  }
}

export default signedTransaction
