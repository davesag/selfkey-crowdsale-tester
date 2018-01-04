import reducer, { INITIAL_STATE } from './reducer'
import makeAction from '../../utils/actionMaker'

import {
  PRECOMMITMENTS_BULK_ADD,
  PRECOMMITMENTS_BULK_ADD_FAIL,
  PRECOMMITMENTS_BULK_ADD_SUCCESS,
  PRECOMMITMENT_SINGLE_ADD,
  PRECOMMITMENT_SINGLE_ADD_FAIL,
  PRECOMMITMENT_SINGLE_ADD_SUCCESS
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
