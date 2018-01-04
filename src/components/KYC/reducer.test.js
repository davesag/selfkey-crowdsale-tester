import reducer, { INITIAL_STATE } from './reducer'
import makeAction from '../../utils/actionMaker'

import {
  KYC_VERIFY,
  KYC_VERIFY_SUCCESS,
  KYC_VERIFY_FAIL,
  KYC_UNVERIFY,
  KYC_UNVERIFY_SUCCESS,
  KYC_UNVERIFY_FAIL
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
      verifying: true
    }

    it('returns the previous state', () => {
      expect(reducer(state, action)).toEqual(state)
    })
  })
})
