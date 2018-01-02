import { ABI_LOAD } from './actions'
import blockchainAction from '../../utils/blockchainAction'

import fetchOptions from '../../utils/fetchOptions'
import { ERRORS } from '../../constants'

const { missingContract } = ERRORS

const handler = async ({
  params: [contract],
  dispatch,
  state: { owner: { address, isOwner }, contract: { SelfkeyCrowdsale } }
}) => {
  if (!contract) throw new Error(missingContract)

  const result = await fetch(`/abis/${contract}.json`, fetchOptions)
  const abi = await result.json()
  return { contract, abi }
}

const loadABI = contract => blockchainAction(contract)(ABI_LOAD, handler)

export default loadABI
