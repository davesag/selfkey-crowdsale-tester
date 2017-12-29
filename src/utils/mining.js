import Eth from 'ethjs-query'
import HttpProvider from 'ethjs-provider-http'
import { ETH_PROVIDER_URL } from '../constants'
import isZero from './isZero'

const DELAY = 5000 // 5 seconds

const eth = new Eth(new HttpProvider(ETH_PROVIDER_URL))

const mining = tx =>
  new Promise((resolve, reject) => {
    const check = setInterval(() => {
      eth.getTransactionByHash(tx, (err, result) => {
        if (err) {
          clearInterval(check)
          reject(err)
        } else {
          if (!isZero(result.blockHash)) {
            clearInterval(check)
            resolve(result)
          }
        }
      })
    }, DELAY)
  })

export default mining
