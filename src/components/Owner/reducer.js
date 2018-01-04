import {
  OWNER_LOAD,
  OWNER_LOAD_SUCCESS,
  OWNER_LOAD_FAIL,
  ACCOUNT_RECEIVED, // carries address in action.address not payload.
  ACCOUNT_CHANGED // carries address in action.address not payload.
} from './actions'

export const INITIAL_STATE = {
  isOwner: false,
  loading: false,
  error: null,
  owner: null,
  address: null
}

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload, address } = action
  switch (type) {
    case ACCOUNT_RECEIVED: {
      const isOwner = address && state.owner && address === state.owner
      return { ...state, address, isOwner }
    }
    case ACCOUNT_CHANGED: {
      const isOwner = address && state.owner && address === state.owner
      return { ...state, address, isOwner }
    }
    case OWNER_LOAD: {
      return { ...state, loading: true }
    }
    case OWNER_LOAD_SUCCESS: {
      const isOwner = payload && state.address && payload === state.address
      return {
        ...state,
        loading: false,
        owner: payload,
        error: null,
        isOwner
      }
    }
    case OWNER_LOAD_FAIL: {
      return {
        ...state,
        loading: false,
        isOwner: false,
        owner: null,
        error: payload
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
