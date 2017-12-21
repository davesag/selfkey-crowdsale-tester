import {
  STATUS_CHECK,
  STATUS_CHECK_SUCCESS,
  STATUS_CHECK_FAIL
} from './actions'

const INITIAL_STATE = {
  checkingStatus: false,
  status: null,
  error: null,
  address: null
}

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case STATUS_CHECK: {
      return {
        ...INITIAL_STATE,
        address: payload,
        checkingStatus: true
      }
    }
    case STATUS_CHECK_SUCCESS: {
      return {
        ...state,
        checkingStatus: false,
        status: payload
      }
    }
    case STATUS_CHECK_FAIL: {
      return {
        ...state,
        checkingStatus: false,
        error: payload
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
