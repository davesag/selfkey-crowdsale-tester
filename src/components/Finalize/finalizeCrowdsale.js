import signedTransaction from '../../utils/signedTransaction'
import makeAction from '../../utils/actionMaker'
import {
  CROWDSALE_FINALIZE,
  CROWDSALE_FINALIZE_SUCCESS,
  CROWDSALE_FINALIZE_FAIL
} from './actions'

import { CROWDSALE_ADDRESS, ERRORS } from '../../constants'

const { notCrowdsaleOwner } = ERRORS

const finalizeCrowdsale = () => async (dispatch, getState) => {
  const {
    owner: { address, isOwner },
    contract: { SelfkeyCrowdsale }
  } = getState()
  if (!isOwner) {
    dispatch(makeAction(CROWDSALE_FINALIZE_FAIL, notCrowdsaleOwner))
  } else {
    dispatch(makeAction(CROWDSALE_FINALIZE))
    try {
      const signTx = signedTransaction(
        SelfkeyCrowdsale.abi,
        CROWDSALE_ADDRESS,
        address
      )
      const tx = await signTx('finalize')
      console.debug('finalise tx', tx)
      dispatch(makeAction(CROWDSALE_FINALIZE_SUCCESS))
    } catch (err) {
      console.error(err)
      if (err.tx) console.error(err.tx)
      dispatch(makeAction(CROWDSALE_FINALIZE_FAIL, err.message))
    }
  }
}

export default finalizeCrowdsale
