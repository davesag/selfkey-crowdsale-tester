import reducer, { INITIAL_STATE } from './reducer'

import { ABI_LOAD, ABI_LOAD_FAIL, ABI_LOAD_SUCCESS } from './actions'

describe('unknown action', () => {
  describe('given no state', () => {
    it('returns the initial state', () => {
      expect(reducer(undefined, { type: 'bollocks' })).toEqual(INITIAL_STATE)
    })
  })

  describe('given a previous state', () => {
    const state = {
      test: {
        loading: true,
        error: null,
        abi: null
      }
    }

    it('returns the previous state', () => {
      expect(reducer(state, { type: 'bollocks' })).toEqual(state)
    })
  })
})
