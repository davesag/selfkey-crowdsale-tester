import Eth from 'ethjs-query'
import HttpProvider from 'ethjs-provider-http'
import BigNumber from 'bignumber.js'

import signedTransaction from '../../utils/signedTransaction'
import makeAction from '../../utils/actionMaker'
import { parse } from '../../utils/precommitmentCSV'
import blockchainAction from '../../utils/blockchainAction'
import mining from '../../utils/mining'
import txSucceeded from '../../utils/txSucceeded'
import TxError from '../../utils/TxError'

import { ETH_PROVIDER_URL, CROWDSALE_ADDRESS, ERRORS } from '../../constants'
import { MINING_STOP } from '../Mining/actions'
import getMiningData from '../Mining/getMiningData'

import {
  PRECOMMITMENTS_BULK_ADD,
  PRECOMMITMENT_SINGLE_ADD,
  PRECOMMITMENT_SINGLE_ADD_FAIL,
  PRECOMMITMENT_SINGLE_ADD_SUCCESS
} from './actions'

const { invalidData, notCrowdsaleOwner } = ERRORS
const eth = new Eth(new HttpProvider(ETH_PROVIDER_URL))

const handler = async ({
  params: [data],
  dispatch,
  state: { owner: { address, isOwner }, contract: { SelfkeyCrowdsale } }
}) => {
  if (!isOwner) throw new Error(notCrowdsaleOwner)
  if (!data || data === '') throw new Error(invalidData)

  const signTx = signedTransaction(
    SelfkeyCrowdsale.abi,
    CROWDSALE_ADDRESS,
    address
  )

  const addItem = async item => {
    const { beneficiary, tokensAllocated, halfVesting } = item
    dispatch(makeAction(PRECOMMITMENT_SINGLE_ADD, item))
    try {
      const tx = await signTx(
        'addPrecommitment',
        beneficiary,
        BigNumber(tokensAllocated),
        halfVesting
      )
      dispatch(getMiningData(tx))
      console.debug('addPrecommitment tx', tx)
      const result = await mining(tx)
      console.debug('mining result', result)
      dispatch(makeAction(MINING_STOP, result))
      const receipt = await eth.getTransactionReceipt(tx)
      if (!txSucceeded(receipt))
        throw new TxError(`Transaction failed.`, receipt)

      dispatch(makeAction(PRECOMMITMENT_SINGLE_ADD_SUCCESS, item))
      return tx
    } catch (err) {
      dispatch(makeAction(PRECOMMITMENT_SINGLE_ADD_FAIL, err.message))
      throw err
    }
  }

  const result = []
  for (let i = 0; i < data.length; i++) {
    result.push(await addItem(data[i]))
  }
  return result
}

const addPrecommitments = data =>
  blockchainAction(parse(data))(PRECOMMITMENTS_BULK_ADD, handler)

export default addPrecommitments
