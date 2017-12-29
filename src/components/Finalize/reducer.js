import {
  CROWDSALE_FINALIZE,
  CROWDSALE_FINALIZE_SUCCESS,
  CROWDSALE_FINALIZE_FAIL
} from './actions'

const INITIAL_STATE = {
  finalizing: false,
  error: null
}

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case CROWDSALE_FINALIZE: {
      return {
        ...INITIAL_STATE,
        finalizing: true
      }
    }
    case CROWDSALE_FINALIZE_SUCCESS: {
      return {
        ...state,
        finalizing: false
      }
    }
    case CROWDSALE_FINALIZE_FAIL: {
      return {
        ...state,
        finalizing: false,
        error: payload
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
