import contractAccess from '../../utils/contractAccess'
import blockchainMiningAction from '../../utils/blockchainMiningAction'

import { KYC_VERIFY } from './actions'

import { CROWDSALE_ADDRESS, ERRORS } from '../../constants'

const { invalidAddress, notCrowdsaleOwner } = ERRORS

const handler = async ({
  params: [addressToVerify],
  dispatch,
  state: { owner: { owner, isOwner }, contract: { SelfkeyCrowdsale } }
}) => {
  if (!addressToVerify || addressToVerify === '')
    throw new Error(invalidAddress)
  if (!isOwner) throw new Error(notCrowdsaleOwner)

  const crowdsale = contractAccess(CROWDSALE_ADDRESS, SelfkeyCrowdsale.abi)

  const tx = crowdsale.verifyKYC(addressToVerify, { from: owner })
  console.debug('verifyKYC tx', tx)
  return tx
}

const verifyKYC = addressToVerify =>
  blockchainMiningAction(addressToVerify)(KYC_VERIFY, handler)

export default verifyKYC
