import makeAction from './actionMaker'

const blockchainAction = (...params) => (action, handler) => async (
  dispatch,
  getState
) => {
  console.debug('params', params)
  dispatch(makeAction(action, params))
  try {
    const result = await handler({
      action,
      params,
      dispatch,
      state: getState()
    })
    dispatch(makeAction(`${action}_SUCCESS`, result))
  } catch (err) {
    console.error(action, err)
    if (err.tx) console.debug(err.tx)
    dispatch(makeAction(`${action}_FAIL`, err.message))
  }
}

export default blockchainAction
