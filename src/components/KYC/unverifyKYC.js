import signedTransaction from '../../utils/signedTransaction'
import makeAction from '../../utils/actionMaker'
import {
  KYC_UNVERIFY,
  KYC_UNVERIFY_SUCCESS,
  KYC_UNVERIFY_FAIL
} from './actions'

import { CROWDSALE_ADDRESS, ERRORS } from '../../constants'

const { invalidAddress, notCrowdsaleOwner } = ERRORS

const unverifyKYC = (addressToUnverify, abi) => async (dispatch, getState) => {
  const { owner: { address, isOwner } } = getState()
  if (!addressToUnverify || addressToUnverify === '') {
    dispatch(makeAction(KYC_UNVERIFY_FAIL, invalidAddress))
  } else if (!isOwner) {
    dispatch(makeAction(KYC_UNVERIFY_FAIL, notCrowdsaleOwner))
  } else {
    dispatch(makeAction(KYC_UNVERIFY, addressToUnverify))
    try {
      const signTx = signedTransaction(abi, CROWDSALE_ADDRESS, address)
      const tx = await signTx('rejectKYC', addressToUnverify)
      console.debug('rejectKYC tx', tx)
      dispatch(makeAction(KYC_UNVERIFY_SUCCESS))
    } catch (err) {
      console.error(err)
      if (err.tx) console.error(err.tx)
      dispatch(makeAction(KYC_UNVERIFY_FAIL, err.message))
    }
  }
}

export default unverifyKYC
