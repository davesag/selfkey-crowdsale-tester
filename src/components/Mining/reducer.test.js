import reducer, { INITIAL_STATE } from './reducer'

import {
  MINING_DATA_GET,
  MINING_DATA_GET_SUCCESS,
  MINING_DATA_GET_FAIL,
  MINING_START,
  MINING_STOP
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
      loading: true
    }

    it('returns the previous state', () => {
      expect(reducer(state, { type: 'bollocks' })).toEqual(state)
    })
  })
})
