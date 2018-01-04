import reducer, { INITIAL_STATE } from './reducer'
import makeAction from '../../utils/actionMaker'

import {
  PRECOMMITMENT_ADD,
  PRECOMMITMENT_ADD_FAIL,
  PRECOMMITMENT_ADD_SUCCESS
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
      adding: true
    }

    it('returns the previous state', () => {
      expect(reducer(state, action)).toEqual(state)
    })
  })
})

describe('PRECOMMITMENT_ADD', () => {
  const action = makeAction(PRECOMMITMENT_ADD)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      adding: true
    }
    it('returns the correct state', () => {
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
      adding: true
    }

    it('returns the updated state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('PRECOMMITMENT_ADD_SUCCESS', () => {
  const action = makeAction(PRECOMMITMENT_ADD_SUCCESS)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      adding: false
    }

    it('returns the correct state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      error: 'oops',
      adding: true
    }
    const expected = {
      ...state,
      error: null,
      adding: false
    }

    it('returns the updated state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('PRECOMMITMENT_ADD_FAIL', () => {
  const error = 'oops'
  const action = makeAction(PRECOMMITMENT_ADD_FAIL, error)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      adding: false,
      error
    }

    it('returns the correct state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      adding: true
    }
    const expected = {
      ...state,
      error,
      adding: false
    }

    it('returns the updated state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})
