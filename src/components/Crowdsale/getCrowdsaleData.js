import BigNumber from 'bignumber.js'
import makeAction from '../../utils/actionMaker'
import contractAccess from '../../utils/contractAccess'

import {
  CROWDSALE_DATA_GET,
  CROWDSALE_DATA_GET_SUCCESS,
  CROWDSALE_DATA_GET_FAIL
} from './actions'

import { CROWDSALE_ADDRESS } from '../../constants'

const getNumber = result => result[0].toNumber()
const getBigNumber = result => BigNumber(result[0])

const getCrowdsaleData = abi => async dispatch => {
  dispatch(makeAction(CROWDSALE_DATA_GET))
  try {
    const crowdsale = contractAccess(CROWDSALE_ADDRESS, abi)
    const startTime = getNumber(await crowdsale.startTime()) * 1000
    const endTime = getNumber(await crowdsale.endTime()) * 1000
    const tokensPurchased = getBigNumber(await crowdsale.totalPurchased())
    dispatch(
      makeAction(CROWDSALE_DATA_GET_SUCCESS, {
        startTime,
        endTime,
        tokensPurchased
      })
    )
  } catch (err) {
    console.error(err)
    dispatch(makeAction(CROWDSALE_DATA_GET_FAIL, err.message))
  }
}

export default getCrowdsaleData
