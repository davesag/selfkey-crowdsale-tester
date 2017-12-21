import React from 'react'
import PropTypes from 'prop-types'

import dateFormat from '../../utils/dateFormat'

const CrowdsaleDates = ({ startDate, endDate }) => {
  const start = dateFormat(new Date(startDate))
  const end = dateFormat(new Date(endDate))

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
  startDate: PropTypes.number.isRequired,
  endDate: PropTypes.number.isRequired
}

export default CrowdsaleDates
