import makeAction from '../../utils/actionMaker'
import {
  KYC_UNVERIFY,
  KYC_UNVERIFY_SUCCESS,
  KYC_UNVERIFY_FAIL
} from './actions'

const unverifyKYC = address => async dispatch => {
  if (!address || address === '') {
    dispatch(makeAction(KYC_UNVERIFY_FAIL, 'Invalid Address'))
  } else {
    dispatch(makeAction(KYC_UNVERIFY, address))
    try {
      // await do the web3 stuff
      dispatch(makeAction(KYC_UNVERIFY_SUCCESS))
    } catch (err) {
      console.error('caught error', err)
      dispatch(makeAction(KYC_UNVERIFY_FAIL, err.message))
    }
  }
}

export default unverifyKYC
