import { arrayOf, oneOf, number } from 'prop-types'

export const navigationShape = {
  lhs: {
    // put nav items here
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
