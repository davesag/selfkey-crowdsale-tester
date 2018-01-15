import timeFormat from './timeFormat'

const A_SECOND = 1000
const A_MINUTE_A_SECOND = 61 * A_SECOND
const AN_HOUR_A_MINUTE_A_SECOND = (61 + 60 * 60) * A_SECOND

it('returns 1 second if passed A_SECOND', () => {
  expect(timeFormat(A_SECOND, true)).toEqual('1 second')
})

it('returns 1 minute 1 second if passed A_MINUTE_A_SECOND', () => {
  expect(timeFormat(A_MINUTE_A_SECOND, true)).toEqual('1 minute 1 second')
})

it('returns 1 hour 1 minute 1 second if passed AN_HOUR_A_MINUTE_A_SECOND', () => {
  expect(timeFormat(AN_HOUR_A_MINUTE_A_SECOND, true)).toEqual(
    '1 hour 1 minute 1 second'
  )
})

it('returns 00:00:01 if passed A_SECOND', () => {
  expect(timeFormat(A_SECOND)).toEqual('00:00:01')
})

it('returns 00:01:01 if passed A_MINUTE_A_SECOND', () => {
  expect(timeFormat(A_MINUTE_A_SECOND)).toEqual('00:01:01')
})

it('returns 01:01:01 if passed AN_HOUR_A_MINUTE_A_SECOND', () => {
  expect(timeFormat(AN_HOUR_A_MINUTE_A_SECOND)).toEqual('01:01:01')
})
