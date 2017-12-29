import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { Button, FormGroup } from 'react-bootstrap'

import finalizeCrowdsale from './finalizeCrowdsale'
import { abiPropType } from '../../utils/shapes'

const FinalizeCrowdsale = ({
  abi,
  doFinalize,
  finalizing,
  error,
  buttonLabel
}) => (
  <FormGroup className={error ? 'has-error' : null}>
    <Button bsStyle="warning" disabled={finalizing} onClick={doFinalize(abi)}>
      {buttonLabel}
    </Button>
    {error && <p>{error}</p>}
  </FormGroup>
)

FinalizeCrowdsale.propTypes = {
  abi: abiPropType.isRequired,
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
  doFinalize: abi => () => dispatch(finalizeCrowdsale(abi))
})

export default connect(mapStateToProps, mapDispatchToProps)(FinalizeCrowdsale)
