import React from 'react'
import PropTypes from 'prop-types'

import stringIfNotNull from '../../utils/stringIfNotNull'
import { bigNumberShape } from '../../utils/shapes'
import yesNoIfNotNull from '../../utils/yesNoIfNotNull'

const CrowdsaleStats = ({
  lockedTotal,
  tokensPurchased,
  isFinalized,
  foundationBalance,
  foundersBalance,
  walletBalance
}) => (
  <dl className="dl-horizontal" id="crowdsale-stats">
    <dt>Tokens Purchased</dt>
    <dd>{stringIfNotNull(tokensPurchased)}</dd>
    <dt>Locked Total</dt>
    <dd>{stringIfNotNull(lockedTotal)}</dd>
    <dt>Foundation Balance</dt>
    <dd>{stringIfNotNull(foundationBalance)}</dd>
    <dt>Founders Balance</dt>
    <dd>{stringIfNotNull(foundersBalance)}</dd>
    <dt>Wallet Balance</dt>
    <dd>{stringIfNotNull(walletBalance)}</dd>
    <dt>Crowdsale Finalized</dt>
    <dd>{yesNoIfNotNull(isFinalized, 'Yes', 'No')}</dd>
  </dl>
)

CrowdsaleStats.propTypes = {
  lockedTotal: PropTypes.shape(bigNumberShape),
  tokensPurchased: PropTypes.shape(bigNumberShape),
  foundationBalance: PropTypes.shape(bigNumberShape),
  foundersBalance: PropTypes.shape(bigNumberShape),
  walletBalance: PropTypes.shape(bigNumberShape),
  isFinalized: PropTypes.bool
}

CrowdsaleStats.defaultProps = {
  lockedTotal: null,
  tokensPurchased: null,
  foundationBalance: null,
  foundersBalance: null,
  walletBalance: null,
  isFinalized: null
}

export default CrowdsaleStats
