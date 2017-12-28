import parsePrecommitmentCSV from './parsePrecommitmentCSV'

const data = `0x0000000000000000000000000000000000000000,123456789,YES
0x0000000000000000000000000000000000000001,123456780,NO`

const expected = [
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

it('parses the data correctly', () => {
  expect(parsePrecommitmentCSV(data)).toEqual(expected)
})
