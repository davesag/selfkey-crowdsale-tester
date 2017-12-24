import contractAccess from '../../utils/contractAccess'
import makeAction from '../../utils/actionMaker'
import {
  KYC_UNVERIFY,
  KYC_UNVERIFY_SUCCESS,
  KYC_UNVERIFY_FAIL
} from './actions'

import { CROWDSALE_ADDRESS } from '../../constants'

const unverifyKYC = (address, abi) => async dispatch => {
  if (!address || address === '') {
    dispatch(makeAction(KYC_UNVERIFY_FAIL, 'Invalid Address'))
  } else {
    dispatch(makeAction(KYC_UNVERIFY, address))
    try {
      const crowdsale = contractAccess(CROWDSALE_ADDRESS, abi)
      await crowdsale.rejectKYC(address)
      dispatch(makeAction(KYC_UNVERIFY_SUCCESS))
    } catch (err) {
      console.error('caught error', err)
      dispatch(makeAction(KYC_UNVERIFY_FAIL, err.message))
    }
  }
}

export default unverifyKYC
