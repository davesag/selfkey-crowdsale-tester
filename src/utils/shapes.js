import { arrayOf, oneOf, string, number } from 'prop-types'

export const navigationShape = {
  lhs: {
    kyc: string.isRequired,
    precommitments: string.isRequired
  },
  rhs: {
    // put nav items here
  }
}

export const bigNumberShape = {
  s: oneOf([1]), // must be positive
  e: number.isRequired,
  c: arrayOf(number).isRequired
}

export const blockShape = {
  hash: string.isRequired
}
