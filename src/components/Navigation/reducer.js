import { TITLE_SET } from './actions'

const INITIAL_STATE = {
  lhs: {
    // add nav items here
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
