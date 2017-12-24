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

export const abiEventShape = {
  name: string.isRequired,
  anonymous: bool.isRequired,
  inputs: arrayOf(shape(abiTypeShape)).isRequired,
  type: oneOf(['event']).isRequired
}

export const abiConstructorShape = {
  inputs: arrayOf(shape(abiTypeShape)).isRequired,
  type: oneOf(['constructor']).isRequired,
  payable: bool.isRequired,
  stateMutability: oneOf(['view', 'nonpayable']).isRequired
}

export const abiFallbackShape = {
  type: oneOf(['fallback']).isRequired,
  payable: bool.isRequired,
  stateMutability: oneOf(['view', 'nonpayable', 'payable']).isRequired
}

export const abiFunctionShape = {
  name: string.isRequired,
  constant: bool.isRequired,
  inputs: arrayOf(shape(abiTypeShape)).isRequired,
  outputs: arrayOf(shape(abiTypeShape)).isRequired,
  payable: bool.isRequired,
  stateMutability: oneOf(['view', 'nonpayable']).isRequired,
  type: oneOf(['function']).isRequired
}

export const abiPropType = arrayOf(
  oneOfType([
    shape(abiConstructorShape),
    shape(abiFunctionShape),
    shape(abiEventShape),
    shape(abiFallbackShape)
  ])
)

export const validAbis = (props, propName) => {
  const abis = props[propName]
  Object.keys(abis).forEach(abi => {
    const isErr = abiPropType(abi)
    if (isErr) return isErr
  })
}
