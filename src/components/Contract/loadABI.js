import { ABI_LOAD } from './actions'
import blockchainAction from '../../utils/blockchainAction'

import fetchOptions from '../../utils/fetchOptions'

const handler = async ({
  params: [contract],
  dispatch,
  state: { owner: { address, isOwner }, contract: { SelfkeyCrowdsale } }
}) => {
  const result = await fetch(`/abis/${contract}.json`, fetchOptions)
  const abi = await result.json()
  return abi ? { contract, abi } : null
}

const loadABI = contract => blockchainAction(contract)(ABI_LOAD, handler)

export default loadABI
