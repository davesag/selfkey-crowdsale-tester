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
