import signedTransaction from '../../utils/signedTransaction'
import makeAction from '../../utils/actionMaker'
import BigNumber from 'bignumber.js'
import blockchainAction from '../../utils/blockchainAction'

import { PRECOMMITMENT_ADD, PRECOMMITMENT_ADD_FAIL } from './actions'

import { CROWDSALE_ADDRESS, ERRORS } from '../../constants'
const {
  invalidAddress,
  notCrowdsaleOwner,
  amountMustBeGreaterThanZero
} = ERRORS

const handler = async ({
  params,
  dispatch,
  state: { owner: { address, isOwner }, contract: { SelfkeyCrowdsale } }
}) => {
  const [beneficiary, tokensAllocated] = params

  if (!isOwner) {
    dispatch(makeAction(PRECOMMITMENT_ADD_FAIL, notCrowdsaleOwner))
    return null
  }

  if (!beneficiary || beneficiary === '') {
    dispatch(makeAction(PRECOMMITMENT_ADD_FAIL, invalidAddress))
    return null
  }

  if (tokensAllocated.lt(0)) {
    dispatch(makeAction(PRECOMMITMENT_ADD_FAIL, amountMustBeGreaterThanZero))
    return null
  }

  const signTx = signedTransaction(
    SelfkeyCrowdsale.abi,
    CROWDSALE_ADDRESS,
    address
  )

  const tx = await signTx('addPrecommitment', ...params)
  console.debug('addPrecommitment tx', tx)
  return tx
}

const addPrecommitment = (
  beneficiary,
  rawTokensAllocated,
  halfVestingString
) => {
  const tokensAllocated = BigNumber(rawTokensAllocated || '0')
  const halfVesting = halfVestingString === 'true'

  return blockchainAction(beneficiary, tokensAllocated, halfVesting)(
    PRECOMMITMENT_ADD,
    handler
  )
}

export default addPrecommitment
