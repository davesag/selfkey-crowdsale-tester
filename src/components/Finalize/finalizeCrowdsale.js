import signedTransaction from '../../utils/signedTransaction'
import makeAction from '../../utils/actionMaker'
import blockchainAction from '../../utils/blockchainAction'

import { CROWDSALE_FINALIZE, CROWDSALE_FINALIZE_FAIL } from './actions'

import { CROWDSALE_ADDRESS, ERRORS } from '../../constants'

const { notCrowdsaleOwner } = ERRORS

const handler = async ({
  params: [address],
  dispatch,
  state: { owner: { isOwner }, contract: { SelfkeyCrowdsale } }
}) => {
  if (!isOwner) {
    dispatch(makeAction(CROWDSALE_FINALIZE_FAIL, notCrowdsaleOwner))
    return null
  }
  const signTx = signedTransaction(
    SelfkeyCrowdsale.abi,
    CROWDSALE_ADDRESS,
    address
  )

  const tx = await signTx('finalize')
  console.debug('finalise tx', tx)
  return tx
}

const finalizeCrowdsale = () => {
  const action = blockchainAction()
  return action(CROWDSALE_FINALIZE, handler)
}

export default finalizeCrowdsale
