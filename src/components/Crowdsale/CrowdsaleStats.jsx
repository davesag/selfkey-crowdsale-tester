import React from 'react'
import PropTypes from 'prop-types'

import stringIfNotNull from '../../utils/stringIfNotNull'
import { bigNumberShape } from '../../utils/shapes'
import yesNoIfNotNull from '../../utils/yesNoIfNotNull'

const CrowdsaleStats = ({
  tokensPurchased,
  isFinalized,
  foundationBalance,
  walletBalance
}) => (
  <dl className="dl-horizontal" id="crowdsale-stats">
    <dt>Tokens Purchased</dt>
    <dd>{stringIfNotNull(tokensPurchased)}</dd>
    <dt>Foundation Balance</dt>
    <dd>{stringIfNotNull(foundationBalance)}</dd>
    <dt>Wallet Balance</dt>
    <dd>{stringIfNotNull(walletBalance)}</dd>
    <dt>Crowdsale Finalized</dt>
    <dd>{yesNoIfNotNull(isFinalized, 'Yes', 'No')}</dd>
  </dl>
)

CrowdsaleStats.propTypes = {
  tokensPurchased: PropTypes.shape(bigNumberShape),
  foundationBalance: PropTypes.shape(bigNumberShape),
  walletBalance: PropTypes.shape(bigNumberShape),
  isFinalized: PropTypes.bool
}

CrowdsaleStats.defaultProps = {
  tokensPurchased: null,
  foundationBalance: null,
  walletBalance: null,
  isFinalized: null
}

export default CrowdsaleStats
