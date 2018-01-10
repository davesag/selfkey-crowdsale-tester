import Eth from 'ethjs-query'
import HttpProvider from 'ethjs-provider-http'
import EthereumTx from 'ethereumjs-tx'

import encodeFunction from './encodeFunction'

import {
  PRIVATE_KEY,
  ETH_PROVIDER_URL,
  GAS,
  GAS_PRICE,
  CHAIN_ID
} from '../constants'

const eth = new Eth(new HttpProvider(ETH_PROVIDER_URL))
const privateKey = Buffer.from(PRIVATE_KEY.slice(2), 'hex') // trim out the 0x
const gas = parseInt(GAS, 10)
const gasPrice = parseInt(GAS_PRICE, 10)
const defaultParams = {
  gas,
  gasPrice,
  chainId: CHAIN_ID,
  value: 0
}

const signedTransaction = (abi, contractAddress, owner) => async (
  fnName,
  ...params
) => {
  const nonce = await eth.getTransactionCount(owner)
  const data = encodeFunction(abi, fnName, params)
  const txParams = {
    ...defaultParams,
    nonce,
    to: contractAddress,
    data
  }

  const tx = new EthereumTx(txParams)
  tx.sign(privateKey)
  const serializedTx = tx.serialize()
  const txString = `0x${serializedTx.toString('hex')}`
  return eth.sendRawTransaction(txString)
}

export default signedTransaction
