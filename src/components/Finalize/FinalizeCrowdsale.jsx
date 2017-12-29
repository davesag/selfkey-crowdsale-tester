import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { Button, FormGroup } from 'react-bootstrap'

import finalizeCrowdsale from './finalizeCrowdsale'

const FinalizeCrowdsale = ({ doFinalize, finalizing, error, buttonLabel }) => (
  <FormGroup className={error ? 'has-error' : null}>
    <Button bsStyle="warning" disabled={finalizing} onClick={doFinalize}>
      {buttonLabel}
    </Button>
    {error && <p className="text-warning">Error: {error}</p>}
  </FormGroup>
)

FinalizeCrowdsale.propTypes = {
  doFinalize: PropTypes.func.isRequired,
  finalizing: PropTypes.bool,
  buttonLabel: PropTypes.string,
  error: PropTypes.string
}

FinalizeCrowdsale.defaultProps = {
  finalizing: false,
  buttonLabel: 'Finalize Crowdsale',
  error: null
}

const mapStateToProps = ({ finalize: { finalizing, error } }) => ({
  finalizing,
  error,
  buttonLabel: finalizing
    ? 'Finalizing Crowdsale'
    : FinalizeCrowdsale.defaultProps.buttonLabel
})

const mapDispatchToProps = dispatch => ({
  doFinalize: () => dispatch(finalizeCrowdsale())
})

export default connect(mapStateToProps, mapDispatchToProps)(FinalizeCrowdsale)
