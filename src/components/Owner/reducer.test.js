/* eslint-disable no-unused-vars */
import reducer, { INITIAL_STATE } from './reducer'
import makeAction from '../../utils/actionMaker'

import {
  OWNER_LOAD,
  OWNER_LOAD_SUCCESS,
  OWNER_LOAD_FAIL,
  ACCOUNT_RECEIVED, // carries address in action.address not payload.
  ACCOUNT_CHANGED // carries address in action.address not payload.
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
