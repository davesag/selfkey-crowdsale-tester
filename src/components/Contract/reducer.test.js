import reducer, { INITIAL_STATE } from './reducer'
import makeAction from '../../utils/actionMaker'

import { ABI_LOAD, ABI_LOAD_FAIL, ABI_LOAD_SUCCESS } from './actions'

const test = {
  loading: true,
  error: null,
  abi: null
}

describe('unknown action', () => {
  const action = makeAction('bollocks')

  describe('given no state', () => {
    it('returns the initial state', () => {
      expect(reducer(undefined, action)).toEqual(INITIAL_STATE)
    })
  })

  describe('given a previous state', () => {
    const state = { test }

    it('returns the previous state', () => {
      expect(reducer(state, action)).toEqual(state)
    })
  })
})

describe('ABI_LOAD', () => {
  const payload = 'test'
  const action = makeAction(ABI_LOAD, payload)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      test
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      anotherTest: { ...test }
    }
    const expected = {
      ...state,
      test
    }

    it('returns the updated state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('ABI_LOAD_SUCCESS', () => {
  const payload = {
    contract: 'test',
    abi: []
  }
  const action = makeAction(ABI_LOAD_SUCCESS, payload)
  const updatedTest = {
    loading: false,
    error: null,
    abi: payload.abi
  }

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      test: updatedTest
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      anotherTest: { ...test }
    }
    const expected = {
      ...state,
      test: updatedTest
    }

    it('returns the updated state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('ABI_LOAD_FAIL', () => {
  const payload = {
    contract: 'test',
    error: 'oops'
  }
  const action = makeAction(ABI_LOAD_FAIL, payload)
  const updatedTest = {
    loading: false,
    error: payload.error,
    abi: null
  }

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      test: updatedTest
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = { test }
    const expected = {
      ...state,
      test: updatedTest
    }

    it('returns the updated state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})
