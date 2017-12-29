import React from 'react'
import PropTypes from 'prop-types'

import stringIfNotNull from '../../utils/stringIfNotNull'
import { bigNumberShape } from '../../utils/shapes'

const CrowdsaleStats = ({ tokensPurchased }) => (
  <dl className="dl-horizontal" id="crowdsale-stats">
    <dt>Tokens Purchased</dt>
    <dd>{stringIfNotNull(tokensPurchased)}</dd>
  </dl>
)

CrowdsaleStats.propTypes = {
  tokensPurchased: PropTypes.shape(bigNumberShape).isRequired
}

export default CrowdsaleStats
