import isZero from './isZero'

it('returns true if passed 0x0', () => {
  expect(isZero('0x0')).toEqual(true)
})

it('returns false if passed nothing', () => {
  expect(isZero()).toEqual(false)
})

it('returns false if passed 0x0000000000000000000000000000000000000001', () => {
  expect(isZero('0x0000000000000000000000000000000000000001')).toEqual(false)
})

it('returns true if passed 0x0000000000000000000000000000000000000000', () => {
  expect(isZero('0x0000000000000000000000000000000000000000')).toEqual(true)
})
