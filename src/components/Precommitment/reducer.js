import {
  PRECOMMITMENT_ADD,
  PRECOMMITMENT_ADD_FAIL,
  PRECOMMITMENT_ADD_SUCCESS
} from './actions'

export const INITIAL_STATE = {
  adding: false,
  beneficiary: null,
  tokensAllocated: null,
  halfVesting: null,
  error: null
}

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case PRECOMMITMENT_ADD: {
      return {
        ...INITIAL_STATE,
        ...payload,
        adding: true
      }
    }
    case PRECOMMITMENT_ADD_SUCCESS: {
      return {
        ...state,
        adding: false
      }
    }
    case PRECOMMITMENT_ADD_FAIL: {
      return {
        ...state,
        adding: false,
        error: payload
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
