import contractAccess from '../../utils/contractAccess'
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
      const crowdsale = contractAccess(CROWDSALE_ADDRESS, abi)
      await crowdsale.rejectKYC(addressToUnverify, { from: address })
      dispatch(makeAction(KYC_UNVERIFY_SUCCESS))
    } catch (err) {
      console.error(err)
      dispatch(makeAction(KYC_UNVERIFY_FAIL, err.message))
    }
  }
}

export default unverifyKYC
