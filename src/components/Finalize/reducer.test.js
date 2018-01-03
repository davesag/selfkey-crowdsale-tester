import reducer, { INITIAL_STATE } from './reducer'

import {
  CROWDSALE_FINALIZE,
  CROWDSALE_FINALIZE_SUCCESS,
  CROWDSALE_FINALIZE_FAIL
} from './actions'

describe('unknown action', () => {
  describe('given no state', () => {
    it('returns the initial state', () => {
      expect(reducer(undefined, { type: 'bollocks' })).toEqual(INITIAL_STATE)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      finalizing: true
    }

    it('returns the previous state', () => {
      expect(reducer(state, { type: 'bollocks' })).toEqual(state)
    })
  })
})
