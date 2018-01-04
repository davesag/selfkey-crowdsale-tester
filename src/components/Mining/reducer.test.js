import reducer, { INITIAL_STATE } from './reducer'
import makeAction from '../../utils/actionMaker'

import {
  MINING_DATA_GET,
  MINING_DATA_GET_SUCCESS,
  MINING_DATA_GET_FAIL,
  MINING_START,
  MINING_STOP
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

describe('MINING_DATA_GET', () => {
  const tx = '0x0'
  const payload = [tx]
  const action = makeAction(MINING_DATA_GET, payload)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      tx,
      loading: true
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      tx,
      error: 'oops'
    }
    const expected = {
      ...state,
      error: null,
      loading: true
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('MINING_DATA_GET_SUCCESS', () => {
  const payload = { tx: '0x0', block: { hash: '0x001' }, isMining: true }
  const action = makeAction(MINING_DATA_GET_SUCCESS, payload)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      ...payload
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      tx: '0x12345',
      error: 'oops'
    }
    const expected = {
      ...state,
      ...payload,
      error: null
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('MINING_DATA_GET_FAIL', () => {
  const error = 'oops'
  const action = makeAction(MINING_DATA_GET_FAIL, error)

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
      tx: '0x12345',
      block: { hash: '0x0' }
    }
    const expected = {
      ...state,
      error,
      loading: false,
      isMining: false
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('MINING_START', () => {
  const tx = '0x0'
  const payload = [tx]
  const action = makeAction(MINING_START, payload)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      tx,
      isMining: true
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      tx,
      error: 'oops'
    }
    const expected = {
      ...state,
      isMining: true
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('MINING_STOP', () => {
  const payload = { hash: 'xxx' }
  const action = makeAction(MINING_STOP, payload)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      isMining: false,
      block: payload
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
      isMining: false,
      block: payload
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})
