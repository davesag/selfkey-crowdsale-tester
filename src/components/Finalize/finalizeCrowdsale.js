import contractAccess from '../../utils/contractAccess'
import blockchainMiningAction from '../../utils/blockchainMiningAction'

import { CROWDSALE_FINALIZE } from './actions'

import { CROWDSALE_ADDRESS, ERRORS } from '../../constants'

const { notCrowdsaleOwner } = ERRORS

const handler = async ({
  dispatch,
  state: { owner: { owner, isOwner }, contract: { SelfkeyCrowdsale } }
}) => {
  if (!isOwner) throw new Error(notCrowdsaleOwner)

  const crowdsale = contractAccess(CROWDSALE_ADDRESS, SelfkeyCrowdsale.abi)

  const tx = await crowdsale.finalize({ from: owner })
  console.debug('finalise tx', tx)
  return tx
}

const finalizeCrowdsale = () =>
  blockchainMiningAction()(CROWDSALE_FINALIZE, handler)

export default finalizeCrowdsale
