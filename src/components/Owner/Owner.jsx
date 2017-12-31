import React from 'react'
import PropTypes from 'prop-types'

import { Label } from 'react-bootstrap'
import yesNoIfNotNull from '../../utils/yesNoIfNotNull'

const Owner = ({ isOwner }) => {
  const bsStyle = yesNoIfNotNull(isOwner, 'success', 'danger') || 'warning'
  const label =
    yesNoIfNotNull(
      isOwner,
      'You are the Crowdsale Owner',
      'You are not the Crowdsale Owner'
    ) || 'Loading'

  return <Label bsStyle={bsStyle}>{label}</Label>
}

Owner.propTypes = { isOwner: PropTypes.bool }
Owner.defaultProps = { isOwner: null }

export default Owner
