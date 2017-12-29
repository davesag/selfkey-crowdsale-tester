class TxError extends Error {
  constructor(message, tx) {
    super(message)
    this.tx = tx
    Error.captureStackTrace(this, TxError)
  }
}

export default TxError
