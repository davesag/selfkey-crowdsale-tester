import blockchainAction from './blockchainAction'

const testAction = 'TEST_ACTION'
const testParam = 'test param'
const testDispatch = () => {}
const testGetState = () => ({})
const testResult = { test: true }

describe('happy path', () => {
  const handler = async ({ action, params, dispatch, state }) => {
    expect(action).toBe(testAction)
    expect(params[0]).toBe(testParam)
    return testResult
  }

  const theAction = blockchainAction(testParam)
  const theThunk = theAction(testAction, handler)

  it('blockchainAction returns a function', () => {
    expect(typeof theAction).toBe('function')
  })

  it('theAction returns a function', () => {
    expect(typeof theThunk).toBe('function')
  })

  it('theThunk executes the handler', async () => {
    await theThunk(testDispatch, testGetState)
    expect.assertions(2)
  })
})
