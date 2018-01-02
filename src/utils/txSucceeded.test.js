import txSucceeded from './txSucceeded'

it('returns false if passed nothing', () => {
  expect(txSucceeded()).toEqual(false)
})

it('returns false if passed something with no status', () => {
  const result = {}
  expect(txSucceeded(result)).toEqual(false)
})

it("returns true if passed something with a status that's not 0x0..0", () => {
  const result = { status: 'goodtimes' }
  expect(txSucceeded(result)).toEqual(true)
})

it("returns false if passed something with a status that's 0x0..0", () => {
  const result = { status: '0x0' }
  expect(txSucceeded(result)).toEqual(false)
})
