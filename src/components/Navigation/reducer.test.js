import reducer, { INITIAL_STATE } from './reducer'
import makeAction from '../../utils/actionMaker'

import { TITLE_SET } from './actions'

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
      title: 'test'
    }

    it('returns the previous state', () => {
      expect(reducer(state, action)).toEqual(state)
    })
  })
})

describe('TITLE_SET', () => {
  const payload = 'this is the title'
  const action = makeAction(TITLE_SET, payload)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      title: payload
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      title: 'some other title'
    }
    const expected = {
      ...state,
      title: payload
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})
