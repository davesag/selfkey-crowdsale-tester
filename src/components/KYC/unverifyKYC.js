import signedTransaction from '../../utils/signedTransaction'
import makeAction from '../../utils/actionMaker'
import blockchainAction from '../../utils/blockchainAction'

import { KYC_UNVERIFY, KYC_UNVERIFY_FAIL } from './actions'

import { CROWDSALE_ADDRESS, ERRORS } from '../../constants'

const { invalidAddress, notCrowdsaleOwner } = ERRORS

const handler = async ({
  params: [addressToUnverify],
  dispatch,
  state: { owner: { address, isOwner }, contract: { SelfkeyCrowdsale } }
}) => {
  if (!addressToUnverify || addressToUnverify === '') {
    dispatch(makeAction(KYC_UNVERIFY_FAIL, invalidAddress))
    return null
  }

  if (!isOwner) {
    dispatch(makeAction(KYC_UNVERIFY_FAIL, notCrowdsaleOwner))
    return null
  }

  const signTx = signedTransaction(
    SelfkeyCrowdsale.abi,
    CROWDSALE_ADDRESS,
    address
  )

  const tx = await signTx('rejectKYC', addressToUnverify)
  console.debug('rejectKYC tx', tx)
  return tx
}

const unverifyKYC = addressToUnverify => {
  const action = blockchainAction(addressToUnverify)
  return action(KYC_UNVERIFY, handler)
}

export default unverifyKYC
