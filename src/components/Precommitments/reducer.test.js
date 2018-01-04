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

describe('PRECOMMITMENTS_BULK_ADD', () => {
  const data = []
  const payload = [data]
  const action = makeAction(PRECOMMITMENTS_BULK_ADD, payload)

  describe('given no state', () => {
    const expected = {
      ...INITIAL_STATE,
      data,
      adding: true
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
      adding: true
    }

    it('returns the updated state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('PRECOMMITMENTS_BULK_ADD_SUCCESS', () => {
  const action = makeAction(PRECOMMITMENTS_BULK_ADD_SUCCESS)

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

describe('PRECOMMITMENTS_BULK_ADD_FAIL', () => {
  const error = 'oops'
  const action = makeAction(PRECOMMITMENTS_BULK_ADD_FAIL, error)

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

describe('PRECOMMITMENT_SINGLE_ADD', () => {
  const beneficiary = '0x0'
  const payload = { beneficiary }
  const action = makeAction(PRECOMMITMENT_SINGLE_ADD, payload)

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
      data: [{ beneficiary }]
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

describe('PRECOMMITMENT_SINGLE_ADD_SUCCESS', () => {
  const action = makeAction(PRECOMMITMENT_SINGLE_ADD_SUCCESS)

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
      data: [
        { beneficiary: '0x0' },
        { beneficiary: '0x1' },
        { beneficiary: '0x2' }
      ],
      current: 1
    }
    const expected = {
      ...state,
      data: [{ beneficiary: '0x0' }, { beneficiary: '0x2' }],
      current: null
    }

    it('returns the updated state', () => {
      expect(reducer(state, action)).toEqual(expected)
    })
  })
})

describe('PRECOMMITMENT_SINGLE_ADD_FAIL', () => {
  const error = 'oops'
  const action = makeAction(PRECOMMITMENT_SINGLE_ADD_FAIL, error)

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
      data: [{ beneficiary: '0x0' }, { beneficiary: '0x2' }],
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
