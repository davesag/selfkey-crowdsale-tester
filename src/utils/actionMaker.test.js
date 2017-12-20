import makeAction from './actionMaker'

const type = 'test-type'
const payload = 'test-payload'
const expected = { type, payload }

it('makes an action', () => {
  expect(makeAction(type, payload)).toEqual(expected)
})
