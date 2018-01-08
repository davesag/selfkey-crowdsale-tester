import { KYC_VERIFY, KYC_VERIFY_SUCCESS, KYC_VERIFY_FAIL } from './actions'

export const INITIAL_STATE = {
  verifying: false,
  error: null,
  address: null
}

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case KYC_VERIFY: {
      const [address] = payload
      return {
        ...INITIAL_STATE,
        address,
        verifying: true
      }
    }
    case KYC_VERIFY_SUCCESS: {
      return {
        ...state,
        error: null,
        verifying: false
      }
    }
    case KYC_VERIFY_FAIL: {
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
