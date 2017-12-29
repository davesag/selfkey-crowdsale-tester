const cstSupported = () => typeof Error.captureStackTrace === 'function'

class TxError extends Error {
  constructor(message, tx) {
    super(message)
    this.tx = tx
    if (cstSupported()) Error.captureStackTrace(this, TxError)
  }
}

export default TxError
