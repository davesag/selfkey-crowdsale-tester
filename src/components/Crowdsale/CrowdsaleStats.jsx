import React from 'react'
import PropTypes from 'prop-types'

const CrowdsaleStats = ({ tokensPurchased }) => (
  <dl className="dl-horizontal" id="crowdsale-stats">
    <dt>Tokens Purchased</dt>
    <dd>{tokensPurchased}</dd>
  </dl>
)

CrowdsaleStats.propTypes = {
  tokensPurchased: PropTypes.number.isRequired
}

export default CrowdsaleStats
