const arrayToObject = ([beneficiary, tokensAllocated, halfVesting]) => ({
  beneficiary,
  tokensAllocated,
  halfVesting: halfVesting === 'YES'
})

export const parse = data =>
  data
    .trim()
    .split('\n')
    .map(line => arrayToObject(line.trim().split(',')))

// incoming data is array of {beneficiary, tokensAllocated, halfVesting = true}
const objectToArray = ({ beneficiary, tokensAllocated, halfVesting }) => [
  beneficiary,
  tokensAllocated,
  halfVesting ? 'YES' : 'NO'
]

export const toString = data =>
  data ? data.map(d => objectToArray(d).join(',')).join('\n') : null
