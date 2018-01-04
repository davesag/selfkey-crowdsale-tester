import reducer, { INITIAL_STATE } from './reducer'
import makeAction from '../../utils/actionMaker'

import {
  CROWDSALE_FINALIZE,
  CROWDSALE_FINALIZE_SUCCESS,
  CROWDSALE_FINALIZE_FAIL
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
      finalizing: true
    }

    it('returns the previous state', () => {
      expect(reducer(state, action)).toEqual(state)
    })
  })
})

describe('CROWDSALE_FINALIZE', () => {
  const action = makeAction(CROWDSALE_FINALIZE)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      finalizing: true
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
      finalizing: true
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('CROWDSALE_FINALIZE_SUCCESS', () => {
  const action = makeAction(CROWDSALE_FINALIZE_SUCCESS)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      finalizing: false
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
      finalizing: false
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('CROWDSALE_FINALIZE_FAIL', () => {
  const error = 'oops'
  const action = makeAction(CROWDSALE_FINALIZE_FAIL, error)

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
      finalizing: true
    }
    const expected = {
      ...state,
      finalizing: false,
      error
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})
