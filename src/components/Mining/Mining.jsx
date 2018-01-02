import React from 'react'
import PropTypes from 'prop-types'

import { Label } from 'react-bootstrap'
import { blockShape } from '../../utils/shapes'

const miningStyle = (isMining, error) =>
  error ? 'danger' : isMining ? 'warning' : 'success'

const miningLabel = (loading, isMining, tx, block) => {
  if (loading) return 'Getting data…'
  if (isMining) return block ? `mining block ${block.hash}` : 'mining starting'
  if (block) return `mined block ${block.hash}`
  if (tx) return `last tx ${tx}`
  return 'No recent activity'
}

const Mining = ({ loading, isMining, tx, block, error }) => (
  <Label
    disabled={loading || isMining}
    bsStyle={miningStyle(isMining || loading, error)}
  >
    {error ? `error: ${error}` : miningLabel(loading, isMining, tx, block)}
  </Label>
)

Mining.propTypes = {
  loading: PropTypes.bool,
  isMining: PropTypes.bool,
  tx: PropTypes.string,
  block: PropTypes.shape(blockShape),
  error: PropTypes.string
}

Mining.defaultPropTypes = {
  loading: false,
  isMining: false,
  tx: null,
  block: null,
  error: null
}

export default Mining
