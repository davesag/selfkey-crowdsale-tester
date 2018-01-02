import dateFormat from './dateFormat'

it('throws an error if passed null', () => {
  expect(() => dateFormat(null)).toThrow()
})

it('throws an error if passed nothing', () => {
  expect(() => dateFormat()).toThrow()
})

it('throws an error if passed something that is not a date', () => {
  expect(() => dateFormat('')).toThrow()
})

it('converts some dates to the correct yyyy-mm-dd strings', () => {
  const dates = [
    [new Date(Date.UTC(2001, 10, 30)), '2001-11-30'], // simple
    [new Date(Date.UTC(2001, 0, 1)), '2001-01-01'], // with padding
    [new Date(Date.UTC(2004, 1, 29)), '2004-02-29'], // leap year
    [new Date(Date.UTC(2003, 1, 29)), '2003-03-01'] // 29 feb non leap year
  ]
  dates.forEach(([date, expected]) => {
    expect(dateFormat(date)).toEqual(expected)
  })
})
