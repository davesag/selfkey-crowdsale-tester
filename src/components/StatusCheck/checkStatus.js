import contractAccess from '../../utils/contractAccess'
import makeAction from '../../utils/actionMaker'
import {
  STATUS_CHECK,
  STATUS_CHECK_SUCCESS,
  STATUS_CHECK_FAIL
} from './actions'

import { CROWDSALE_ADDRESS } from '../../constants'

const checkStatus = (address, abi) => async dispatch => {
  if (!address || address === '') {
    dispatch(makeAction(STATUS_CHECK_FAIL, 'Invalid Address'))
  } else {
    dispatch(makeAction(STATUS_CHECK, address))
    try {
      const crowdsale = contractAccess(CROWDSALE_ADDRESS, abi)
      const result = await crowdsale.kycVerified(address)
      dispatch(makeAction(STATUS_CHECK_SUCCESS, result[0]))
    } catch (err) {
      dispatch(makeAction(STATUS_CHECK_FAIL, err.message))
    }
  }
}

export default checkStatus
