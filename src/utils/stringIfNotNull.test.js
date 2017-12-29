import stringIfNotNull from './stringIfNotNull'

it('returns null if passed null', () => {
  expect(stringIfNotNull(null)).toEqual(null)
})

it('returns null if passed nothing', () => {
  expect(stringIfNotNull()).toEqual(null)
})

it("returns 'false' if passed false", () => {
  expect(stringIfNotNull(false)).toEqual('false')
})

it("returns '0' if passed 0", () => {
  expect(stringIfNotNull(0)).toEqual('0')
})
