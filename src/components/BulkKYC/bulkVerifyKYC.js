import Eth from 'ethjs-query'
import HttpProvider from 'ethjs-provider-http'

import contractAccess from '../../utils/contractAccess'
import makeAction from '../../utils/actionMaker'
import blockchainAction from '../../utils/blockchainAction'
import mining from '../../utils/mining'
import txSucceeded from '../../utils/txSucceeded'
import TxError from '../../utils/TxError'

import { ETH_PROVIDER_URL, CROWDSALE_ADDRESS, ERRORS } from '../../constants'
import { MINING_STOP } from '../Mining/actions'
import getMiningData from '../Mining/getMiningData'

import {
  KYC_BULK_APPROVE,
  KYC_SINGLE_APPROVE,
  KYC_SINGLE_APPROVE_FAIL,
  KYC_SINGLE_APPROVE_SUCCESS
} from './actions'

const { invalidData, notCrowdsaleOwner } = ERRORS
const eth = new Eth(new HttpProvider(ETH_PROVIDER_URL))

const handler = async ({
  params: [data],
  dispatch,
  state: { owner: { owner, isOwner }, contract: { SelfkeyCrowdsale } }
}) => {
  if (!isOwner) throw new Error(notCrowdsaleOwner)
  if (!data || data === '') throw new Error(invalidData)

  const crowdsale = contractAccess(CROWDSALE_ADDRESS, SelfkeyCrowdsale.abi)

  const verifyAddress = async address => {
    dispatch(makeAction(KYC_SINGLE_APPROVE, address))
    try {
      const tx = await crowdsale.verifyKYC(address, { from: owner })
      dispatch(getMiningData(tx))
      console.debug('verifyKYC tx', tx)
      const result = await mining(tx)
      console.debug('mining result', result)
      dispatch(makeAction(MINING_STOP, result))
      const receipt = await eth.getTransactionReceipt(tx)
      if (!txSucceeded(receipt))
        throw new TxError(`Transaction failed.`, receipt)

      dispatch(makeAction(KYC_SINGLE_APPROVE_SUCCESS, address))
      return tx
    } catch (err) {
      dispatch(makeAction(KYC_SINGLE_APPROVE_FAIL, err.message))
      throw err
    }
  }

  const result = []
  for (let i = 0; i < data.length; i++) {
    result.push(await verifyAddress(data[i]))
  }
  return result
}

const parse = text =>
  typeof text === 'string'
    ? text
        .trim()
        .split('\n')
        .map(address => address.trim())
    : null

const bulkVerifyKYC = data =>
  blockchainAction(parse(data))(KYC_BULK_APPROVE, handler)

export default bulkVerifyKYC
