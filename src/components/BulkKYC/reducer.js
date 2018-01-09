import {
  KYC_BULK_APPROVE,
  KYC_BULK_APPROVE_FAIL,
  KYC_BULK_APPROVE_SUCCESS,
  KYC_SINGLE_APPROVE,
  KYC_SINGLE_APPROVE_FAIL,
  KYC_SINGLE_APPROVE_SUCCESS
} from './actions'

export const INITIAL_STATE = {
  verifying: false,
  data: [],
  current: null,
  error: null
}

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case KYC_BULK_APPROVE: {
      const [data] = payload
      return {
        ...INITIAL_STATE,
        data,
        verifying: true
      }
    }
    case KYC_SINGLE_APPROVE: {
      const current = state.data.indexOf(payload)
      return {
        ...state,
        current
      }
    }
    case KYC_SINGLE_APPROVE_SUCCESS: {
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
    case KYC_SINGLE_APPROVE_FAIL: {
      return {
        ...state,
        error: payload
      }
    }
    case KYC_BULK_APPROVE_SUCCESS: {
      return { ...INITIAL_STATE }
    }
    case KYC_BULK_APPROVE_FAIL: {
      return {
        ...state,
        verifying: false,
        error: payload
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
