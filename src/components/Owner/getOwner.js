import makeAction from '../../utils/actionMaker'
import contractAccess from '../../utils/contractAccess'

import { OWNER_LOAD, OWNER_LOAD_SUCCESS, OWNER_LOAD_FAIL } from './actions'

import { CROWDSALE_ADDRESS } from '../../constants'

const getOwner = abi => async (dispatch, getState) => {
  const { owner } = getState()
  if (!owner.owner) {
    dispatch(makeAction(OWNER_LOAD))
    try {
      const crowdsale = contractAccess(CROWDSALE_ADDRESS, abi)
      const result = await crowdsale.owner()
      dispatch(makeAction(OWNER_LOAD_SUCCESS, result[0]))
    } catch (err) {
      console.error(err)
      dispatch(makeAction(OWNER_LOAD_FAIL, err.message))
    }
  }
}

export default getOwner
