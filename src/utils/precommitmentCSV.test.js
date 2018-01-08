import { parse, toString } from './precommitmentCSV'

const DUMMY_STRING = `0x0000000000000000000000000000000000000000,123456789,YES
0x0000000000000000000000000000000000000001,123456780,NO
0x0000000000000000000000000000000000000002,123456781,no
0x0000000000000000000000000000000000000003,123456761,yes`

const DUMMY_ARRAY = [
  {
    beneficiary: '0x0000000000000000000000000000000000000000',
    tokensAllocated: '123456789',
    halfVesting: true
  },
  {
    beneficiary: '0x0000000000000000000000000000000000000001',
    tokensAllocated: '123456780',
    halfVesting: false
  },
  {
    beneficiary: '0x0000000000000000000000000000000000000002',
    tokensAllocated: '123456781',
    halfVesting: false
  },
  {
    beneficiary: '0x0000000000000000000000000000000000000003',
    tokensAllocated: '123456761',
    halfVesting: true
  }
]

describe('precommitmentCSV', () => {
  describe('#parse', () => {
    const data = DUMMY_STRING
    const expected = DUMMY_ARRAY

    it('parses the data correctly', () => {
      expect(parse(data)).toEqual(expected)
    })

    it('parsing nothing returns null', () => {
      expect(parse()).toEqual(null)
    })
  })

  describe('#toString', () => {
    const data = DUMMY_ARRAY
    const expected = DUMMY_STRING.toLowerCase()

    it('parses the data correctly', () => {
      expect(toString(data)).toEqual(expected)
    })

    it('parsing nothing returns null', () => {
      expect(toString()).toEqual(null)
    })
  })
})
