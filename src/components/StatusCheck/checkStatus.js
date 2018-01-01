import contractAccess from '../../utils/contractAccess'
import makeAction from '../../utils/actionMaker'
import blockchainAction from '../../utils/blockchainAction'

import { STATUS_CHECK, STATUS_CHECK_FAIL } from './actions'

import { CROWDSALE_ADDRESS, ERRORS } from '../../constants'

const { invalidAddress } = ERRORS

const handler = async ({
  params: [address],
  dispatch,
  state: { contract: { SelfkeyCrowdsale } }
}) => {
  if (!address || address === '') {
    dispatch(makeAction(STATUS_CHECK_FAIL, invalidAddress))
    return null
  }

  const crowdsale = contractAccess(CROWDSALE_ADDRESS, SelfkeyCrowdsale.abi)
  const result = await crowdsale.kycVerified(address)
  return result[0]
}

const checkStatus = address => blockchainAction(address)(STATUS_CHECK, handler)

export default checkStatus
