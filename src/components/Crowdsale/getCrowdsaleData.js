import Eth from 'ethjs'
import makeAction from '../../utils/actionMaker'

import {
  CROWDSALE_DATA_GET,
  CROWDSALE_DATA_GET_SUCCESS,
  CROWDSALE_DATA_GET_FAIL
} from './actions'

const { REACT_APP_ETH_PROVIDER_URL, REACT_APP_CROWDSALE_ADDRESS } = process.env

const getNumber = result => result[0].toNumber()

const getCrowdsaleData = abi => async dispatch => {
  dispatch(makeAction(CROWDSALE_DATA_GET))
  try {
    const eth = new Eth(new Eth.HttpProvider(REACT_APP_ETH_PROVIDER_URL))
    const contract = eth.contract(abi)
    const crowdsale = contract.at(REACT_APP_CROWDSALE_ADDRESS)
    const startTime = getNumber(await crowdsale.startTime()) * 1000
    const endTime = getNumber(await crowdsale.endTime()) * 1000
    const weiRaised = getNumber(await crowdsale.weiRaised())
    const tokensPurchased = getNumber(await crowdsale.totalPurchased())
    dispatch(
      makeAction(CROWDSALE_DATA_GET_SUCCESS, {
        startTime,
        endTime,
        weiRaised,
        tokensPurchased
      })
    )
  } catch (err) {
    console.error('caught error', err)
    dispatch(makeAction(CROWDSALE_DATA_GET_FAIL, err.message))
  }
}

export default getCrowdsaleData
