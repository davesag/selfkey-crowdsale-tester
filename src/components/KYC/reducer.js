import {
  KYC_VERIFY,
  KYC_VERIFY_SUCCESS,
  KYC_VERIFY_FAIL,
  KYC_UNVERIFY,
  KYC_UNVERIFY_SUCCESS,
  KYC_UNVERIFY_FAIL
} from './actions'

const INITIAL_STATE = {
  verifying: false,
  unverifying: false,
  error: null,
  address: null
}

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case KYC_VERIFY: {
      return {
        ...INITIAL_STATE,
        address: payload,
        verifying: true
      }
    }
    case KYC_UNVERIFY: {
      return {
        ...INITIAL_STATE,
        address: payload,
        unverifying: true
      }
    }
    case KYC_VERIFY_SUCCESS: {
      return {
        ...state,
        verifying: false
      }
    }
    case KYC_UNVERIFY_SUCCESS: {
      return {
        ...state,
        unverifying: false
      }
    }
    case KYC_VERIFY_FAIL: {
      return {
        ...state,
        verifying: false,
        error: payload
      }
    }
    case KYC_UNVERIFY_FAIL: {
      return {
        ...state,
        unverifying: false,
        error: payload
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
