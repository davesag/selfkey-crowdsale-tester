import React from 'react'
import PropTypes from 'prop-types'

const CrowdsaleStats = ({ weiRaised, tokensPurchased }) => (
  <dl className="dl-horizontal" id="crowdsale-stats">
    <dt>Wei Raised</dt>
    <dd>{weiRaised}</dd>
    <dt>Tokens Purchased</dt>
    <dd>{tokensPurchased}</dd>
  </dl>
)

CrowdsaleStats.propTypes = {
  weiRaised: PropTypes.number.isRequired,
  tokensPurchased: PropTypes.number.isRequired
}

export default CrowdsaleStats
