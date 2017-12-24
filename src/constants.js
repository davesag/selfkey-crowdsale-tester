const {
  REACT_APP_CROWDSALE_ADDRESS,
  REACT_APP_ETH_PROVIDER_URL,
  REACT_APP_TOKEN_ADDRESS
} = process.env

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const CROWDSALE_ADDRESS = REACT_APP_CROWDSALE_ADDRESS
export const ETH_PROVIDER_URL = REACT_APP_ETH_PROVIDER_URL
export const TOKEN_ADDRESS = REACT_APP_TOKEN_ADDRESS

export const ERRORS = {
  invalidAddress: 'Invalid Address',
  notCrowdsaleOwner: 'You are not the owner of the Crowdsale Contract'
}
