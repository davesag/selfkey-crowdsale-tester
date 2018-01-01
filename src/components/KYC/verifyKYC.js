import signedTransaction from '../../utils/signedTransaction'
import makeAction from '../../utils/actionMaker'
import blockchainAction from '../../utils/blockchainAction'

import { KYC_VERIFY, KYC_VERIFY_FAIL } from './actions'

import { CROWDSALE_ADDRESS, ERRORS } from '../../constants'

const { invalidAddress, notCrowdsaleOwner } = ERRORS

const handler = async ({
  params: [addressToVerify],
  dispatch,
  state: { owner: { address, isOwner }, contract: { SelfkeyCrowdsale } }
}) => {
  if (!addressToVerify || addressToVerify === '') {
    dispatch(makeAction(KYC_VERIFY_FAIL, invalidAddress))
    return null
  }

  if (!isOwner) {
    dispatch(makeAction(KYC_VERIFY_FAIL, notCrowdsaleOwner))
    return null
  }

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
