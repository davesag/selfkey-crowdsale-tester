import React from 'react'
import PropTypes from 'prop-types'

import stringIfNotNull from '../../utils/stringIfNotNull'
import { bigNumberShape } from '../../utils/shapes'

const CrowdsaleStats = ({
  tokensPurchased,
  isFinalized,
  foundationBalance,
  foundersBalance,
  walletBalance
}) => (
  <dl className="dl-horizontal" id="crowdsale-stats">
    <dt>Tokens Purchased</dt>
    <dd>{stringIfNotNull(tokensPurchased)}</dd>
    <dt>Foundation Balance</dt>
    <dd>{stringIfNotNull(foundationBalance)}</dd>
    <dt>Founders Balance</dt>
    <dd>{stringIfNotNull(foundersBalance)}</dd>
    <dt>Wallet Balance</dt>
    <dd>{stringIfNotNull(walletBalance)}</dd>
    <dt>Crowdsale Finalized</dt>
    <dd>{isFinalized ? 'Yes' : 'No'}</dd>
  </dl>
)

CrowdsaleStats.propTypes = {
  tokensPurchased: PropTypes.shape(bigNumberShape).isRequired,
  foundationBalance: PropTypes.shape(bigNumberShape).isRequired,
  foundersBalance: PropTypes.shape(bigNumberShape).isRequired,
  walletBalance: PropTypes.shape(bigNumberShape).isRequired,
  isFinalized: PropTypes.bool.isRequired
}

export default CrowdsaleStats
