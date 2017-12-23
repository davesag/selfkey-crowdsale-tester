import { arrayOf, oneOf, oneOfType, bool, shape, string } from 'prop-types'

export const navigationShape = {
  lhs: {
    // put nav items here
  },
  rhs: {
    // put nav items here
  }
}

const abiTypeShape = {
  name: string.isRequired,
  type: string.isRequired
}

const abiEventShape = {
  name: string.isRequired,
  anonymous: bool.isRequired,
  inputs: arrayOf(shape(abiTypeShape)).isRequired,
  type: oneOf(['event'])
}

const abiFunctionShape = {
  name: string.isRequired,
  constant: bool.isRequired,
  inputs: arrayOf(shape(abiTypeShape)).isRequired,
  outputs: arrayOf(shape(abiTypeShape)).isRequired,
  payable: bool.isRequired,
  stateMutability: oneOf(['view', 'nonpayable']),
  type: oneOf(['function'])
}

export const validAbis = (props, propName) => {
  const abis = props[propName]
  Object.keys(abis).forEach(abi => {
    const isErr = arrayOf(
      oneOfType([shape(abiFunctionShape), shape(abiEventShape)])
    )
    if (isErr) return isErr
  })
}
