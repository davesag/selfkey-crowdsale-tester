import reducer, { INITIAL_STATE } from './reducer'

import {
  PRECOMMITMENT_ADD,
  PRECOMMITMENT_ADD_FAIL,
  PRECOMMITMENT_ADD_SUCCESS
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
      adding: true
    }

    it('returns the previous state', () => {
      expect(reducer(state, { type: 'bollocks' })).toEqual(state)
    })
  })
})
