import Eth from 'ethjs-query'
import HttpProvider from 'ethjs-provider-http'

import { ETH_PROVIDER_URL } from '../../constants'

import makeAction from '../../utils/actionMaker'
import isZero from '../../utils/isZero'
import blockchainAction from '../../utils/blockchainAction'
import TxError from '../../utils/TxError'

import { MINING_START, MINING_DATA_GET } from './actions'

const eth = new Eth(new HttpProvider(ETH_PROVIDER_URL))

const handler = async ({ params: [tx], dispatch, state: { mining } }) =>
  new Promise((resolve, reject) => {
    dispatch(makeAction(MINING_START, tx))

    eth.getTransactionByHash(tx, (err, result) => {
      if (err) {
        reject(new TxError('Transaction Error', tx))
      } else if (isZero(result.blockHash)) {
        console.debug('result', result)
        resolve({
          ...mining,
          tx,
          block: result,
          isMining: true
        })
      } else {
        console.debug('result', result)
        resolve({
          isMining: false,
          tx,
          error: null,
          block: result
        })
      }
    })
  })

const getMiningData = tx => blockchainAction(tx)(MINING_DATA_GET, handler)

export default getMiningData
