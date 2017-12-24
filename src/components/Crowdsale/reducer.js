import {
  CROWDSALE_DATA_GET,
  CROWDSALE_DATA_GET_SUCCESS,
  CROWDSALE_DATA_GET_FAIL
} from './actions'

const INITIAL_STATE = {
  loading: false,
  error: null,
  startTime: null,
  endTime: null,
  weiRaised: null,
  tokensPurchased: null
}

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case CROWDSALE_DATA_GET: {
      return {
        ...INITIAL_STATE,
        loading: true
      }
    }
    case CROWDSALE_DATA_GET_SUCCESS: {
      console.debug('using payload', payload)
      return {
        ...state,
        loading: false,
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
