const {
  REACT_APP_CROWDSALE_ADDRESS,
  REACT_APP_ETH_PROVIDER_URL,
  REACT_APP_TOKEN_ADDRESS,
  REACT_APP_PRIVATE_KEY
} = process.env

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const CROWDSALE_ADDRESS = REACT_APP_CROWDSALE_ADDRESS
export const ETH_PROVIDER_URL = REACT_APP_ETH_PROVIDER_URL
export const TOKEN_ADDRESS = REACT_APP_TOKEN_ADDRESS
export const PRIVATE_KEY = REACT_APP_PRIVATE_KEY
export const GAS = '2900000'
export const GAS_PRICE = '20000000000'

export const ERRORS = {
  invalidAddress: 'Invalid Address',
  invalidData: 'Invalid data',
  notCrowdsaleOwner: 'You are not the owner of the Crowdsale Contract',
  amountMustBeGreaterThanZero: 'Amount must be greater than zero'
}
