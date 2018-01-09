import Eth from 'ethjs-query'
import HttpProvider from 'ethjs-provider-http'

import makeAction from './actionMaker'
import mining from './mining'
import txSucceeded from './txSucceeded'
import TxError from './TxError'

import { ETH_PROVIDER_URL, ERRORS } from '../constants'
import { MINING_STOP } from '../components/Mining/actions'
import getMiningData from '../components/Mining/getMiningData'

const { stillMining } = ERRORS

const eth = new Eth(new HttpProvider(ETH_PROVIDER_URL))

const blockchainMiningAction = (...params) => (action, handler) => {
  const success = `${action}_SUCCESS`
  const failure = `${action}_FAIL`

  const actionFn = async (dispatch, getState) => {
    dispatch(makeAction(action, params))
    try {
      const state = getState()
      const { mining: { isMining } } = state
      if (isMining) {
        dispatch(makeAction(failure, stillMining))
      } else {
        const tx = await handler({
          action,
          params,
          dispatch,
          state
        })
        console.debug('tx', tx)
        dispatch(getMiningData(tx))
        const result = await mining(tx)
        console.debug('mining result', result)
        dispatch(makeAction(MINING_STOP, result))
        const receipt = await eth.getTransactionReceipt(tx)
        if (!txSucceeded(receipt))
          throw new TxError(`Transaction failed.`, receipt)

        dispatch(makeAction(success))
      }
    } catch (err) {
      console.error(action, err)
      if (err.tx) console.debug(err.tx)
      dispatch(makeAction(failure, err.message))
    }
  }

  return actionFn
}

export default blockchainMiningAction
