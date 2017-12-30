import yesNoIfNotNull from './yesNoIfNotNull'

it('returns null if passed null', () => {
  expect(yesNoIfNotNull(null)).toEqual(null)
})

it('returns null if passed nothing', () => {
  expect(yesNoIfNotNull()).toEqual(null)
})

it("returns 'NO' if passed false", () => {
  expect(yesNoIfNotNull(false)).toEqual('NO')
})

it("returns 'NO' if passed 0", () => {
  expect(yesNoIfNotNull(0)).toEqual('NO')
})

it("returns 'YES' if passed true", () => {
  expect(yesNoIfNotNull(true)).toEqual('YES')
})

it("returns 'YES' if passed 1", () => {
  expect(yesNoIfNotNull(1)).toEqual('YES')
})

it("returns 'FISH' if passed true and 'FISH'", () => {
  expect(yesNoIfNotNull(true, 'FISH')).toEqual('FISH')
})

it("returns 'FRY' if passed false and 'FISH', 'FRY'", () => {
  expect(yesNoIfNotNull(false, 'FISH', 'FRY')).toEqual('FRY')
})
