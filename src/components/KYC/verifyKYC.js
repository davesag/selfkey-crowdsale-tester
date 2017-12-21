import makeAction from '../../utils/actionMaker'
import { KYC_VERIFY, KYC_VERIFY_SUCCESS, KYC_VERIFY_FAIL } from './actions'

const verifyKYC = address => async dispatch => {
  if (!address || address === '') {
    dispatch(makeAction(KYC_VERIFY_FAIL, 'Invalid Address'))
  } else {
    dispatch(makeAction(KYC_VERIFY, address))
    try {
      // await do the web3 stuff
      dispatch(makeAction(KYC_VERIFY_SUCCESS))
    } catch (err) {
      console.error('caught error', err)
      dispatch(makeAction(KYC_VERIFY_FAIL, err.message))
    }
  }
}

export default verifyKYC
