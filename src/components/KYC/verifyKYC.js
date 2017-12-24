import contractAccess from '../../utils/contractAccess'
import makeAction from '../../utils/actionMaker'
import { KYC_VERIFY, KYC_VERIFY_SUCCESS, KYC_VERIFY_FAIL } from './actions'

import { CROWDSALE_ADDRESS } from '../../constants'

const verifyKYC = (address, abi) => async dispatch => {
  if (!address || address === '') {
    dispatch(makeAction(KYC_VERIFY_FAIL, 'Invalid Address'))
  } else {
    dispatch(makeAction(KYC_VERIFY, address))
    try {
      const crowdsale = contractAccess(CROWDSALE_ADDRESS, abi)
      await crowdsale.verifyKYC(address)
      dispatch(makeAction(KYC_VERIFY_SUCCESS))
    } catch (err) {
      console.error('caught error', err)
      dispatch(makeAction(KYC_VERIFY_FAIL, err.message))
    }
  }
}

export default verifyKYC
