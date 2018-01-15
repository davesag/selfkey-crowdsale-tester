import Eth from 'ethjs'

import { ETH_PROVIDER_URL } from '../constants'

const contractAccess = (address, abi) => {
  const eth = new Eth(new Eth.HttpProvider(ETH_PROVIDER_URL))
  const contract = eth.contract(abi)
  return contract.at(address)
}

export default contractAccess
