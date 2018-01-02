import contractAccess from '../../utils/contractAccess'
import blockchainAction from '../../utils/blockchainAction'

import { STATUS_CHECK } from './actions'

import { CROWDSALE_ADDRESS, ERRORS } from '../../constants'

const { invalidAddress } = ERRORS

const handler = async ({
  params: [address],
  dispatch,
  state: { contract: { SelfkeyCrowdsale } }
}) => {
  if (!address || address === '') throw new Error(invalidAddress)

  const crowdsale = contractAccess(CROWDSALE_ADDRESS, SelfkeyCrowdsale.abi)
  const result = await crowdsale.kycVerified(address)
  console.debug('kycVerified', result)
  return result[0]
}

const checkStatus = address => blockchainAction(address)(STATUS_CHECK, handler)

export default checkStatus
