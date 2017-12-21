import makeAction from '../../utils/actionMaker'
import {
  STATUS_CHECK,
  STATUS_CHECK_SUCCESS,
  STATUS_CHECK_FAIL
} from './actions'

const fakeStatusCheckResponse = true // TODO: get this value from web3

const checkStatus = address => async dispatch => {
  if (!address || address === '') {
    dispatch(makeAction(STATUS_CHECK_FAIL, 'Invalid Address'))
  } else {
    dispatch(makeAction(STATUS_CHECK, address))
    try {
      // do the web3 stuff then
      dispatch(makeAction(STATUS_CHECK_SUCCESS, fakeStatusCheckResponse))
    } catch (err) {
      dispatch(makeAction(STATUS_CHECK_FAIL, err.message))
    }
  }
}

export default checkStatus
