import {
  STATUS_CHECK,
  STATUS_CHECK_SUCCESS,
  STATUS_CHECK_FAIL
} from './actions'

export const INITIAL_STATE = {
  checkingStatus: false,
  status: null,
  error: null,
  address: null
}

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case STATUS_CHECK: {
      const [address] = payload
      return {
        ...INITIAL_STATE,
        address,
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
