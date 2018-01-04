import {
  MINING_DATA_GET,
  MINING_DATA_GET_SUCCESS,
  MINING_DATA_GET_FAIL,
  MINING_START,
  MINING_STOP
} from './actions'

export const INITIAL_STATE = {
  isMining: false,
  loading: false,
  tx: null,
  block: null,
  error: null
}

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case MINING_START: {
      const [tx] = payload
      if (!tx) return state
      return {
        ...state,
        tx,
        isMining: true
      }
    }
    case MINING_STOP: {
      return {
        ...state,
        block: payload,
        isMining: false
      }
    }
    case MINING_DATA_GET: {
      const [tx] = payload
      if (!tx) return state
      return {
        ...state,
        tx,
        loading: true,
        error: null
      }
    }
    case MINING_DATA_GET_SUCCESS: {
      return {
        ...state,
        ...payload,
        loading: false,
        error: null
      }
    }
    case MINING_DATA_GET_FAIL: {
      return {
        ...state,
        loading: false,
        isMining: false,
        error: payload
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
