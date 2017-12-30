const arrayToObject = ([beneficiary, tokensAllocated, halfVesting]) => ({
  beneficiary,
  tokensAllocated,
  halfVesting: halfVesting === 'YES'
})

export const parse = data => {
  const lines = data.trim().split('\n')
  return lines.map(line => {
    const items = line.trim().split(',')
    return arrayToObject(items)
  })
}

// incoming data is array of {beneficiary, tokensAllocated, halfVesting = true}
const objectToArray = ({ beneficiary, tokensAllocated, halfVesting }) => [
  beneficiary,
  tokensAllocated,
  halfVesting ? 'YES' : 'NO'
]

export const toString = data =>
  data ? data.map(d => objectToArray(d).join(',')).join('\n') : null
