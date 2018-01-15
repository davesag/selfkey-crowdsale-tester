import { ABI_LOAD, ABI_LOAD_FAIL, ABI_LOAD_SUCCESS } from './actions'

const INITIAL_CONTRACT_STATE = {
  loading: true,
  error: null,
  abi: null
}

export const INITIAL_STATE = {
  /*
    [contractName]
      - loading
      - error
      - abi
  */
}

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case ABI_LOAD: {
      return {
        ...state,
        [payload]: INITIAL_CONTRACT_STATE
      }
    }
    case ABI_LOAD_SUCCESS: {
      const { contract, abi } = payload
      return {
        ...state,
        [contract]: {
          loading: false,
          error: null,
          abi
        }
      }
    }
    case ABI_LOAD_FAIL: {
      const { contract, error } = payload
      return {
        ...state,
        [contract]: {
          loading: false,
          abi: null,
          error
        }
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
