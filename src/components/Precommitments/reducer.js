import {
  PRECOMMITMENTS_BULK_ADD,
  PRECOMMITMENTS_BULK_ADD_FAIL,
  PRECOMMITMENTS_BULK_ADD_SUCCESS,
  PRECOMMITMENT_SINGLE_ADD,
  PRECOMMITMENT_SINGLE_ADD_FAIL,
  PRECOMMITMENT_SINGLE_ADD_SUCCESS
} from './actions'

const INITIAL_STATE = {
  adding: false,
  data: [],
  current: null,
  error: null
}

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case PRECOMMITMENTS_BULK_ADD: {
      const [data] = payload
      return {
        ...INITIAL_STATE,
        data,
        adding: true
      }
    }
    case PRECOMMITMENT_SINGLE_ADD: {
      const current = state.data.findIndex(
        item => item.beneficiary === payload.beneficiary
      )
      return {
        ...state,
        current
      }
    }
    case PRECOMMITMENT_SINGLE_ADD_SUCCESS: {
      const data = [
        ...state.data.slice(0, state.current),
        ...state.data.slice(state.current + 1)
      ]
      return {
        ...state,
        data,
        current: null
      }
    }
    case PRECOMMITMENT_SINGLE_ADD_FAIL: {
      return {
        ...state,
        error: payload
      }
    }
    case PRECOMMITMENTS_BULK_ADD_SUCCESS: {
      return { ...INITIAL_STATE }
    }
    case PRECOMMITMENTS_BULK_ADD_FAIL: {
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
