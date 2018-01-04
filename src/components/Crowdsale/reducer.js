import {
  CROWDSALE_DATA_GET,
  CROWDSALE_DATA_GET_SUCCESS,
  CROWDSALE_DATA_GET_FAIL
} from './actions'

export const INITIAL_STATE = {
  loading: false,
  error: null,
  isFinalized: null,
  startTime: null,
  endTime: null,
  lockedTotal: null,
  tokensPurchased: null,
  foundationBalance: null,
  foundersBalance: null,
  walletBalance: null
}

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case CROWDSALE_DATA_GET: {
      return {
        ...state,
        loading: true,
        error: null
      }
    }
    case CROWDSALE_DATA_GET_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        ...payload
      }
    }
    case CROWDSALE_DATA_GET_FAIL: {
      return {
        ...state,
        loading: false,
        error: payload
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
