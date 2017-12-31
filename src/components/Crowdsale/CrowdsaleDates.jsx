import React from 'react'
import PropTypes from 'prop-types'

import dateFormat from '../../utils/dateFormat'

const CrowdsaleDates = ({ startDate, endDate }) => {
  const start = startDate ? dateFormat(new Date(startDate)) : null
  const end = endDate ? dateFormat(new Date(endDate)) : null

  return (
    <dl className="dl-horizontal" id="crowdsale-dates">
      <dt>Start Date</dt>
      <dd>{start}</dd>
      <dt>End Date</dt>
      <dd>{end}</dd>
    </dl>
  )
}

CrowdsaleDates.propTypes = {
  startDate: PropTypes.number,
  endDate: PropTypes.number
}

CrowdsaleDates.defaultProps = {
  startDate: null,
  endDate: null
}

export default CrowdsaleDates
