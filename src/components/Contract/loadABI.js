import { ABI_LOAD, ABI_LOAD_FAIL, ABI_LOAD_SUCCESS } from './actions'

import fetchOptions from '../../utils/fetchOptions'
import makeAction from '../../utils/actionMaker'

const loadABI = contract => async dispatch => {
  dispatch(makeAction(ABI_LOAD, contract))
  try {
    const result = await fetch(`/abis/${contract}.json`, fetchOptions)
    const abi = await result.json()
    dispatch(makeAction(ABI_LOAD_SUCCESS, { contract, abi }))
  } catch (err) {
    console.error(err)
    dispatch(makeAction(ABI_LOAD_FAIL, { contract, error: err.message }))
  }
}

export default loadABI
