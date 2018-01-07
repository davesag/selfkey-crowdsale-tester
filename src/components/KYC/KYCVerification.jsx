import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Form, FormGroup, Col, Button } from 'react-bootstrap'

import { ZERO_ADDRESS } from '../../constants'

import unverifyKYC from './unverifyKYC'

const KYCVerification = ({
  doUnverifyKYC,
  isMining,
  unverifying,
  unverifyButtonLabel,
  error,
  address
}) => (
  <Form className="form-horizontal" id="kyc-verification">
    <h3>KYC Rejection</h3>
    <FormGroup className={error ? 'has-error' : null}>
      <Col xs={3}>
        <input
          className="form-control"
          name="address"
          placeholder={ZERO_ADDRESS}
          defaultValue={address}
          disabled={unverifying || isMining}
        />
      </Col>
      <Col xs={3}>
        <Button
          bsStyle="danger"
          onClick={doUnverifyKYC}
          disabled={unverifying || isMining}
        >
          {unverifyButtonLabel}
        </Button>
      </Col>
    </FormGroup>
    {error && <p className="text-warning">{error}</p>}
  </Form>
)

KYCVerification.propTypes = {
  doUnverifyKYC: PropTypes.func.isRequired,
  unverifying: PropTypes.bool,
  isMining: PropTypes.bool,
  unverifyButtonLabel: PropTypes.string,
  error: PropTypes.string,
  address: PropTypes.string
}

KYCVerification.defaultPropTypes = {
  unverifying: false,
  isMining: false,
  unverifyButtonLabel: 'Reject KYC',
  error: null,
  address: null
}

const mapStateToProps = ({ kyc, mining: { isMining } }) => ({
  ...kyc,
  isMining,
  unverifyButtonLabel: kyc.unverifying
    ? 'Rejecting KYC'
    : KYCVerification.defaultPropTypes.unverifyButtonLabel
})

const mapDispatchToProps = dispatch => ({
  doUnverifyKYC: evt => dispatch(unverifyKYC(evt.target.form.address.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(KYCVerification)
