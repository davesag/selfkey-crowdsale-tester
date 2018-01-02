import signedTransaction from '../../utils/signedTransaction'
import blockchainMiningAction from '../../utils/blockchainMiningAction'

import { KYC_UNVERIFY } from './actions'

import { CROWDSALE_ADDRESS, ERRORS } from '../../constants'

const { invalidAddress, notCrowdsaleOwner } = ERRORS

const handler = async ({
  params: [addressToUnverify],
  dispatch,
  state: { owner: { address, isOwner }, contract: { SelfkeyCrowdsale } }
}) => {
  if (!addressToUnverify || addressToUnverify === '')
    throw new Error(invalidAddress)
  if (!isOwner) throw new Error(notCrowdsaleOwner)

  const signTx = signedTransaction(
    SelfkeyCrowdsale.abi,
    CROWDSALE_ADDRESS,
    address
  )

  const tx = await signTx('rejectKYC', addressToUnverify)
  console.debug('rejectKYC tx', tx)
  return tx
}

const unverifyKYC = addressToUnverify =>
  blockchainMiningAction(addressToUnverify)(KYC_UNVERIFY, handler)

export default unverifyKYC
