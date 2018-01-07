import reducer, { INITIAL_STATE } from './reducer'
import makeAction from '../../utils/actionMaker'

import {
  CROWDSALE_DATA_GET,
  CROWDSALE_DATA_GET_SUCCESS,
  CROWDSALE_DATA_GET_FAIL
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

describe('CROWDSALE_DATA_GET', () => {
  const action = makeAction(CROWDSALE_DATA_GET)

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
      loading: true
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('CROWDSALE_DATA_GET_SUCCESS', () => {
  const now = new Date().getTime()

  const payload = {
    startTime: now - 1,
    endTime: now + 1,
    tokensPurchased: '6.7340000000000000050247e+22',
    foundationBalance: '2.97e+27',
    walletBalance: '5.18e+22'
  }
  const action = makeAction(CROWDSALE_DATA_GET_SUCCESS, payload)

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
      error: 'oops'
    }
    const expected = {
      ...state,
      error: null,
      ...payload
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('CROWDSALE_DATA_GET_FAIL', () => {
  const payload = 'oops'
  const action = makeAction(CROWDSALE_DATA_GET_FAIL, payload)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      error: payload
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      loading: true
    }
    const expected = {
      ...state,
      error: payload,
      loading: false
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})
