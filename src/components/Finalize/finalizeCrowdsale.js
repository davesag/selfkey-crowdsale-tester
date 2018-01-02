import signedTransaction from '../../utils/signedTransaction'
import blockchainMiningAction from '../../utils/blockchainMiningAction'

import { CROWDSALE_FINALIZE } from './actions'

import { CROWDSALE_ADDRESS, ERRORS } from '../../constants'

const { notCrowdsaleOwner } = ERRORS

const handler = async ({
  dispatch,
  state: { owner: { address, isOwner }, contract: { SelfkeyCrowdsale } }
}) => {
  if (!isOwner) throw new Error(notCrowdsaleOwner)

  const signTx = signedTransaction(
    SelfkeyCrowdsale.abi,
    CROWDSALE_ADDRESS,
    address
  )

  const tx = await signTx('finalize')
  console.debug('finalise tx', tx)
  return tx
}

const finalizeCrowdsale = () =>
  blockchainMiningAction()(CROWDSALE_FINALIZE, handler)

export default finalizeCrowdsale
