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

describe('KYC_VERIFY', () => {
  const address = '0x0'
  const payload = [address]
  const action = makeAction(KYC_VERIFY, payload)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      address,
      verifying: true
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      address,
      error: 'oops'
    }
    const expected = {
      ...state,
      error: null,
      verifying: true
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('KYC_VERIFY_SUCCESS', () => {
  const action = makeAction(KYC_VERIFY_SUCCESS)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      verifying: false
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      error: 'oops'
    }
    const expected = {
      ...state,
      error: null,
      verifying: false
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('KYC_VERIFY_FAIL', () => {
  const error = 'oops'
  const action = makeAction(KYC_VERIFY_FAIL, error)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      verifying: false,
      error
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      verifying: true
    }
    const expected = {
      ...state,
      error,
      verifying: false
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('KYC_UNVERIFY', () => {
  const address = '0x0'
  const payload = [address]
  const action = makeAction(KYC_UNVERIFY, payload)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      address,
      unverifying: true
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      address,
      error: 'oops'
    }
    const expected = {
      ...state,
      error: null,
      unverifying: true
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('KYC_UNVERIFY_SUCCESS', () => {
  const action = makeAction(KYC_UNVERIFY_SUCCESS)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      unverifying: false
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      error: 'oops'
    }
    const expected = {
      ...state,
      error: null,
      unverifying: false
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('KYC_UNVERIFY_FAIL', () => {
  const error = 'oops'
  const action = makeAction(KYC_UNVERIFY_FAIL, error)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      unverifying: false,
      error
    }

    it('returns the expected state', () => {
      expect(reducer(undefined, action)).toEqual(expected)
    })
  })

  describe('given a previous state', () => {
    const state = {
      ...INITIAL_STATE,
      unverifying: true
    }
    const expected = {
      ...state,
      error,
      unverifying: false
    }

    it('returns the expected state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})
