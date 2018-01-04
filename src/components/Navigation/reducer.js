import { TITLE_SET } from './actions'

export const INITIAL_STATE = {
  lhs: {
    kyc: 'KYC',
    precommitments: 'Precommitments'
  },
  rhs: {
    // add nav items here
  },
  title: null
}

const reducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case TITLE_SET: {
      return {
        ...state,
        title: payload
      }
    }
    default: {
      return state
    }
  }
}

export default reducer
