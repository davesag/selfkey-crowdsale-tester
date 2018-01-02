import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { blockShape } from '../../utils/shapes'

const MiningData = ({ children, loading, isMining, error, tx, block }) => (
  <section id="mining-data">
    {error && <p className="text-danger">Error: {error}</p>}
    {children({
      loading,
      isMining,
      tx,
      error,
      block
    })}
  </section>
)

MiningData.propTypes = {
  children: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  tx: PropTypes.string,
  isMining: PropTypes.bool,
  error: PropTypes.string,
  block: PropTypes.shape(blockShape)
}

MiningData.defaultPropTypes = {
  loading: false,
  isMining: false,
  tx: null,
  error: null,
  block: null
}

const mapStateToProps = ({ mining }) => ({ ...mining })

export default connect(mapStateToProps)(MiningData)
