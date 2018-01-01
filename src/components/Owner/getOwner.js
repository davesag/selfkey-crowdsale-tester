import contractAccess from '../../utils/contractAccess'
import blockchainAction from '../../utils/blockchainAction'

import { OWNER_LOAD } from './actions'

import { CROWDSALE_ADDRESS } from '../../constants'

const handler = async ({
  dispatch,
  state: { owner: { owner, isOwner }, contract: { SelfkeyCrowdsale } }
}) => {
  if (owner) return owner

  const crowdsale = contractAccess(CROWDSALE_ADDRESS, SelfkeyCrowdsale.abi)
  const result = await crowdsale.owner()
  return result[0]
}

const getOwner = () => {
  const action = blockchainAction()
  return action(OWNER_LOAD, handler)
}

export default getOwner
