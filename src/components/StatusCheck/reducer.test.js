import reducer, { INITIAL_STATE } from './reducer'
import makeAction from '../../utils/actionMaker'

import {
  STATUS_CHECK,
  STATUS_CHECK_SUCCESS,
  STATUS_CHECK_FAIL
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
      checkingStatus: true
    }

    it('returns the previous state', () => {
      expect(reducer(state, action)).toEqual(state)
    })
  })
})

describe('STATUS_CHECK', () => {
  const address = '0x0'
  const payload = [address]
  const action = makeAction(STATUS_CHECK, payload)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      address,
      checkingStatus: true
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      address,
      error: 'oops',
      checkingStatus: false
    }
    const expected = {
      ...state,
      error: null,
      checkingStatus: true
    }

    it('returns the updated state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('STATUS_CHECK_SUCCESS', () => {
  const status = true
  const action = makeAction(STATUS_CHECK_SUCCESS, status)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      checkingStatus: false,
      status
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      address: '0x0',
      checkingStatus: true
    }
    const expected = {
      ...state,
      status,
      checkingStatus: false
    }

    it('returns the updated state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('STATUS_CHECK_FAIL', () => {
  const error = 'oops'
  const action = makeAction(STATUS_CHECK_FAIL, error)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      checkingStatus: false,
      error
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      address: '0x0',
      checkingStatus: true
    }
    const expected = {
      ...state,
      error,
      checkingStatus: false
    }

    it('returns the updated state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})
