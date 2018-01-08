const arrayToObject = ([beneficiary, tokensAllocated, halfVesting]) => ({
  beneficiary,
  tokensAllocated,
  halfVesting: halfVesting.toLowerCase() === 'yes'
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
  halfVesting ? 'yes' : 'no'
]

export const toString = data =>
  data
    ? data.map(d => (d ? objectToArray(d).join(',') : undefined)).join('\n')
    : null
