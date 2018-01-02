import BigNumber from 'bignumber.js'
import contractAccess from '../../utils/contractAccess'
import blockchainAction from '../../utils/blockchainAction'

import { CROWDSALE_DATA_GET } from './actions'

import { CROWDSALE_ADDRESS, TOKEN_ADDRESS } from '../../constants'

const getNumber = result => result[0].toNumber()
const getBigNumber = result => BigNumber(result[0])

const handler = async ({
  dispatch,
  state: { contract: { SelfkeyCrowdsale, SelfkeyToken } }
}) => {
  const crowdsale = contractAccess(CROWDSALE_ADDRESS, SelfkeyCrowdsale.abi)
  const token = contractAccess(TOKEN_ADDRESS, SelfkeyToken.abi)
  const startTime = getNumber(await crowdsale.startTime()) * 1000
  const endTime = getNumber(await crowdsale.endTime()) * 1000
  const isFinalized = (await crowdsale.isFinalized())[0]
  const lockedTotal = getBigNumber(await crowdsale.lockedTotal())
  const tokensPurchased = getBigNumber(await crowdsale.totalPurchased())
  const foundationPoolAddress = (await crowdsale.FOUNDATION_POOL_ADDR())[0]
  const foundersPoolAddress = (await crowdsale.FOUNDERS_POOL_ADDR())[0]
  const walletAddress = (await crowdsale.CROWDSALE_WALLET_ADDR())[0]
  const foundationBalance = getBigNumber(
    await token.balanceOf(foundationPoolAddress)
  )
  const foundersBalance = getBigNumber(
    await token.balanceOf(foundersPoolAddress)
  )
  const walletBalance = getBigNumber(await token.balanceOf(walletAddress))

  return {
    startTime,
    endTime,
    tokensPurchased,
    isFinalized,
    lockedTotal,
    foundationBalance,
    foundersBalance,
    walletBalance
  }
}

const getCrowdsaleData = () => blockchainAction()(CROWDSALE_DATA_GET, handler)

export default getCrowdsaleData
