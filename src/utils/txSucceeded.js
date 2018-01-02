import isZero from './isZero'

const txSucceeded = result =>
  !!result && !!result.status && !isZero(result.status)

export default txSucceeded
