import signedTransaction from '../../utils/signedTransaction'
import makeAction from '../../utils/actionMaker'
import { KYC_VERIFY, KYC_VERIFY_SUCCESS, KYC_VERIFY_FAIL } from './actions'

import { CROWDSALE_ADDRESS, ERRORS } from '../../constants'

const { invalidAddress, notCrowdsaleOwner } = ERRORS

const verifyKYC = (addressToVerify, abi) => async (dispatch, getState) => {
  const { owner: { address, isOwner } } = getState()
  if (!addressToVerify || addressToVerify === '') {
    dispatch(makeAction(KYC_VERIFY_FAIL, invalidAddress))
  } else if (!isOwner) {
    dispatch(makeAction(KYC_VERIFY_FAIL, notCrowdsaleOwner))
  } else {
    dispatch(makeAction(KYC_VERIFY, addressToVerify))
    try {
      const signTx = signedTransaction(abi, CROWDSALE_ADDRESS, address)
      await signTx('verifyKYC', addressToVerify)
      dispatch(makeAction(KYC_VERIFY_SUCCESS))
    } catch (err) {
      console.error(err)
      dispatch(makeAction(KYC_VERIFY_FAIL, err.message))
    }
  }
}

export default verifyKYC
