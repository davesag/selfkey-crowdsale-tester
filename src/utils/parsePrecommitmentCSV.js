const parsePrecommitmentCSV = data => {
  const lines = data.split('\n')
  return lines.map(line => {
    const items = line.split(',')
    return {
      beneficiary: items[0],
      tokensAllocated: items[1], // string
      halfVesting: items[2] === 'YES'
    }
  })
}

export default parsePrecommitmentCSV
