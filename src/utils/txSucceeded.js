import isZero from './isZero'

const txSucceeded = result => result && !isZero(result.status)

export default txSucceeded
