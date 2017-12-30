import { parse, toString } from './precommitmentCSV'

const DUMMY_STRING = `0x0000000000000000000000000000000000000000,123456789,YES
0x0000000000000000000000000000000000000001,123456780,NO`

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
  }
]

describe('precommitmentCSV', () => {
  describe('#parse', () => {
    const data = DUMMY_STRING
    const expected = DUMMY_ARRAY

    it('parses the data correctly', () => {
      expect(parse(data)).toEqual(expected)
    })
  })

  describe('#toString', () => {
    const data = DUMMY_ARRAY
    const expected = DUMMY_STRING

    it('parses the data correctly', () => {
      expect(toString(data)).toEqual(expected)
    })
  })
})
