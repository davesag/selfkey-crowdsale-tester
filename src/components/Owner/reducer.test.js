import reducer, { INITIAL_STATE } from './reducer'
import makeAction from '../../utils/actionMaker'

import {
  OWNER_LOAD,
  OWNER_LOAD_SUCCESS,
  OWNER_LOAD_FAIL,
  ACCOUNT_RECEIVED, // carries address in action.address not payload.
  ACCOUNT_CHANGED // carries address in action.address not payload.
} from './actions'

describe('unknown action', () => {
  const action = makeAction('bollocks')

  describe('given no state', () => {
    it('returns the initial state', () => {
      expect(reducer(undefined, action)).toEqual(INITIAL_STATE)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      loading: true
    }

    it('returns the previous state', () => {
      expect(reducer(state, action)).toEqual(state)
    })
  })
})

describe('OWNER_LOAD', () => {
  const action = makeAction(OWNER_LOAD)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      loading: true
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      error: 'oops'
    }
    const expected = {
      ...state,
      error: null,
      isOwner: false,
      loading: true
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('OWNER_LOAD_SUCCESS', () => {
  const owner = '0x0'
  const action = makeAction(OWNER_LOAD_SUCCESS, owner)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      loading: false,
      owner,
      isOwner: false
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      address: owner
    }
    const expected = {
      ...state,
      error: null,
      owner,
      isOwner: true,
      loading: false
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('OWNER_LOAD_FAIL', () => {
  const error = 'oops'
  const action = makeAction(OWNER_LOAD_FAIL, error)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      error
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      address: '0x0'
    }
    const expected = {
      ...state,
      error,
      isOwner: false,
      loading: false
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('non-standard actions', () => {
  const makeAddressAction = (type, address) => ({ type, address })

  describe('ACCOUNT_RECEIVED', () => {
    const address = '0x0'
    const action = makeAddressAction(ACCOUNT_RECEIVED, address)

    describe('given no state', () => {
      const expected = {
        ...INITIAL_STATE,
        address,
        isOwner: false
      }

      it('returns the expected state', () => {
        expect(reducer(undefined, action)).toEqual(expected)
      })
    })

    describe('given a previous state', () => {
      const owner = '0x0'
      const state = {
        ...INITIAL_STATE,
        owner,
        isOwner: false
      }
      const expected = {
        ...state,
        error: null,
        owner,
        address,
        isOwner: true
      }

      it('returns the expected state', () => {
        expect(reducer(state, action)).toEqual(expected)
      })
    })
  })

  describe('ACCOUNT_CHANGED', () => {
    const address = '0x0'
    const action = makeAddressAction(ACCOUNT_CHANGED, address)

    describe('given no state', () => {
      const expected = {
        ...INITIAL_STATE,
        address,
        isOwner: false
      }

      it('returns the expected state', () => {
        expect(reducer(undefined, action)).toEqual(expected)
      })
    })

    describe('given a previous state', () => {
      const owner = '0x0'
      const state = {
        ...INITIAL_STATE,
        owner,
        isOwner: false
      }
      const expected = {
        ...state,
        error: null,
        owner,
        address,
        isOwner: true
      }

      it('returns the expected state', () => {
        expect(reducer(state, action)).toEqual(expected)
      })
    })
  })
})
