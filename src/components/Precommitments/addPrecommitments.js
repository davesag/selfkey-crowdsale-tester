import BigNumber from 'bignumber.js'

import signedTransaction from '../../utils/signedTransaction'
import makeAction from '../../utils/actionMaker'
import { parse } from '../../utils/precommitmentCSV'

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

const addPrecommitments = data => async (dispatch, getState) => {
  const {
    owner: { address, isOwner },
    contract: { SelfkeyCrowdsale }
  } = getState()
  if (!isOwner) {
    dispatch(makeAction(PRECOMMITMENTS_BULK_ADD_FAIL, notCrowdsaleOwner))
  } else if (!data || data === '') {
    dispatch(makeAction(PRECOMMITMENTS_BULK_ADD_FAIL, invalidData))
  } else {
    const parsedData = parse(data)
    dispatch(makeAction(PRECOMMITMENTS_BULK_ADD, parsedData))
    try {
      const signTx = signedTransaction(
        SelfkeyCrowdsale.abi,
        CROWDSALE_ADDRESS,
        address
      )
      await Promise.all(
        parsedData.map(async item => {
          const { beneficiary, tokensAllocated, halfVesting } = item
          dispatch(makeAction(PRECOMMITMENT_SINGLE_ADD, item))
          try {
            const tx = await signTx(
              'addPrecommitment',
              beneficiary,
              BigNumber(tokensAllocated),
              halfVesting
            )
            console.debug('addPrecommitment tx', tx)
            dispatch(makeAction(PRECOMMITMENT_SINGLE_ADD_SUCCESS, item))
          } catch (errr) {
            dispatch(makeAction(PRECOMMITMENT_SINGLE_ADD_FAIL, errr.message))
            throw errr
          }
        })
      )
      dispatch(makeAction(PRECOMMITMENTS_BULK_ADD_SUCCESS))
    } catch (err) {
      console.error(err)
      if (err.tx) console.error(err.tx)
      dispatch(makeAction(PRECOMMITMENTS_BULK_ADD_FAIL, err.message))
    }
  }
}

export default addPrecommitments
