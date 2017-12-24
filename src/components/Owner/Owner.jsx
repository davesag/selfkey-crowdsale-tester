import React from 'react'
import PropTypes from 'prop-types'

import { Label } from 'react-bootstrap'

const Owner = ({ isOwner }) => {
  const bsStyle = isOwner ? 'success' : 'danger'
  const label = isOwner ? 'Crowdsale Owner' : 'Not Crowdsale Owner'
  return <Label bsStyle={bsStyle}>{label}</Label>
}

Owner.propTypes = { isOwner: PropTypes.bool.isRequired }

export default Owner
