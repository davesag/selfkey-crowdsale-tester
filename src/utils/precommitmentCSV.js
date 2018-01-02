const arrayToObject = ([beneficiary, tokensAllocated, halfVesting]) => ({
  beneficiary,
  tokensAllocated,
  halfVesting: halfVesting === 'YES'
})

export const parse = data =>
  data
    ? data
        .trim()
        .split('\n')
        .map(line => arrayToObject(line.trim().split(',')))
    : null

const objectToArray = ({ beneficiary, tokensAllocated, halfVesting }) => [
  beneficiary,
  tokensAllocated,
  halfVesting ? 'YES' : 'NO'
]

export const toString = data =>
  data
    ? data.map(d => (d ? objectToArray(d).join(',') : undefined)).join('\n')
    : null
