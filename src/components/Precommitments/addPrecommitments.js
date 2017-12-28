import signedTransaction from '../../utils/signedTransaction'
import makeAction from '../../utils/actionMaker'
import BigNumber from 'bignumber.js'

import {
  PRECOMMITMENTS_BULK_ADD,
  PRECOMMITMENTS_BULK_ADD_FAIL,
  PRECOMMITMENTS_BULK_ADD_SUCCESS,
  PRECOMMITMENT_SINGLE_ADD,
  PRECOMMITMENT_SINGLE_ADD_FAIL,
  PRECOMMITMENT_SINGLE_ADD_SUCCESS
} from './actions'

import { CROWDSALE_ADDRESS, ERRORS } from '../../constants'
const { invalidData, notCrowdsaleOwner } = ERRORS

const parse = data => {
  const lines = data.split('\n')
  return lines.map(line => {
    const items = line.split(',')
    return {
      beneficiary: items[0],
      tokensAllocated: items[1], // string
      halfVesting: items[2] === 'YES'
    }
  })
}

const addPrecommitments = (data, abi) => async (dispatch, getState) => {
  const { owner: { isOwner, address } } = getState()
  if (!isOwner) {
    dispatch(makeAction(PRECOMMITMENTS_BULK_ADD_FAIL, notCrowdsaleOwner))
  } else if (!data || data === '') {
    dispatch(makeAction(PRECOMMITMENTS_BULK_ADD_FAIL, invalidData))
  } else {
    const parsedData = parse(data)
    dispatch(makeAction(PRECOMMITMENTS_BULK_ADD, parsedData))
    try {
      const signTx = signedTransaction(abi, CROWDSALE_ADDRESS, address)
      await Promise.all(
        parsedData.map(async item => {
          const { beneficiary, tokensAllocated, halfVesting } = item
          dispatch(makeAction(PRECOMMITMENT_SINGLE_ADD, item))
          try {
            await signTx(
              'addPrecommitment',
              beneficiary,
              BigNumber(tokensAllocated),
              halfVesting
            )
            dispatch(makeAction(PRECOMMITMENT_SINGLE_ADD_SUCCESS, item))
          } catch (errr) {
            dispatch(makeAction(PRECOMMITMENT_SINGLE_ADD_FAIL, errr.message))
            throw errr
          }
        })
      )
      dispatch(makeAction(PRECOMMITMENTS_BULK_ADD_SUCCESS))
    } catch (err) {
      dispatch(makeAction(PRECOMMITMENTS_BULK_ADD_FAIL, err.message))
    }
  }
}

export default addPrecommitments
