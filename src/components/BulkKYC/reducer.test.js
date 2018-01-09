import reducer, { INITIAL_STATE } from './reducer'
import makeAction from '../../utils/actionMaker'

import {
  KYC_BULK_APPROVE,
  KYC_BULK_APPROVE_FAIL,
  KYC_BULK_APPROVE_SUCCESS,
  KYC_SINGLE_APPROVE,
  KYC_SINGLE_APPROVE_FAIL,
  KYC_SINGLE_APPROVE_SUCCESS
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

describe('KYC_BULK_APPROVE', () => {
  const data = []
  const payload = [data]
  const action = makeAction(KYC_BULK_APPROVE, payload)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      data,
      verifying: true
    }

    it('returns the initial state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      data: ['some other data'],
      allKinds: 'of other crap'
    }
    const expected = {
      ...INITIAL_STATE,
      data,
      verifying: true
    }

    it('returns the updated state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('KYC_BULK_APPROVE_SUCCESS', () => {
  const action = makeAction(KYC_BULK_APPROVE_SUCCESS)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE
    }

    it('returns the initial state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      data: ['some other data'],
      allKinds: 'of other crap'
    }
    const expected = {
      ...INITIAL_STATE
    }

    it('returns the updated state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('KYC_BULK_APPROVE_FAIL', () => {
  const error = 'oops'
  const action = makeAction(KYC_BULK_APPROVE_FAIL, error)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      error
    }

    it('returns the initial state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      data: ['some other data'],
      allKinds: 'of other crap'
    }
    const expected = {
      ...state,
      error
    }

    it('returns the updated state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('KYC_SINGLE_APPROVE', () => {
  const payload = '0x0'
  const action = makeAction(KYC_SINGLE_APPROVE, payload)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      current: -1
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      data: [payload]
    }
    const expected = {
      ...state,
      current: 0
    }

    it('returns the updated state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('KYC_SINGLE_APPROVE_SUCCESS', () => {
  const action = makeAction(KYC_SINGLE_APPROVE_SUCCESS)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      current: null
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      data: ['0x0', '0x1', '0x2'],
      current: 1
    }
    const expected = {
      ...state,
      data: ['0x0', '0x2'],
      current: null
    }

    it('returns the updated state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('KYC_SINGLE_APPROVE_FAIL', () => {
  const error = 'oops'
  const action = makeAction(KYC_SINGLE_APPROVE_FAIL, error)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      error
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      data: ['0x0', '0x2'],
      current: 1
    }
    const expected = {
      ...state,
      error
    }

    it('returns the updated state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})
