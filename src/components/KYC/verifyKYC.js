import signedTransaction from '../../utils/signedTransaction'
import blockchainAction from '../../utils/blockchainAction'

import { KYC_VERIFY } from './actions'

import { CROWDSALE_ADDRESS, ERRORS } from '../../constants'

const { invalidAddress, notCrowdsaleOwner } = ERRORS

const handler = async ({
  params: [addressToVerify],
  dispatch,
  state: { owner: { address, isOwner }, contract: { SelfkeyCrowdsale } }
}) => {
  if (!addressToVerify || addressToVerify === '')
    throw new Error(invalidAddress)
  if (!isOwner) throw new Error(notCrowdsaleOwner)

  const signTx = signedTransaction(
    SelfkeyCrowdsale.abi,
    CROWDSALE_ADDRESS,
    address
  )

  const tx = await signTx('verifyKYC', addressToVerify)
  console.debug('verifyKYC tx', tx)
  return tx
}

const verifyKYC = addressToVerify =>
  blockchainAction(addressToVerify)(KYC_VERIFY, handler)

export default verifyKYC
