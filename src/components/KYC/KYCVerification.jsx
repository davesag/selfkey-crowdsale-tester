import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Form, FormGroup, Col, Button } from 'react-bootstrap'

import { ZERO_ADDRESS } from '../../constants'

import verifyKYC from './verifyKYC'

const KYCVerification = ({
  doVerifyKYC,
  isMining,
  verifying,
  verifyButtonLabel,
  error,
  address
}) => (
  <Form className="form-horizontal" id="kyc-verification">
    <h3>KYC Verification</h3>
    <FormGroup className={error ? 'has-error' : null}>
      <Col xs={3}>
        <input
          className="form-control"
          name="address"
          placeholder={ZERO_ADDRESS}
          defaultValue={address}
          disabled={verifying || isMining}
        />
      </Col>
      <Col xs={3}>
        <Button
          bsStyle="success"
          onClick={doVerifyKYC}
          disabled={verifying || isMining}
        >
          {verifyButtonLabel}
        </Button>
      </Col>
    </FormGroup>
    {error && <p className="text-warning">{error}</p>}
  </Form>
)

KYCVerification.propTypes = {
  doVerifyKYC: PropTypes.func.isRequired,
  verifying: PropTypes.bool,
  isMining: PropTypes.bool,
  verifyButtonLabel: PropTypes.string,
  error: PropTypes.string,
  address: PropTypes.string
}

KYCVerification.defaultPropTypes = {
  verifying: false,
  isMining: false,
  verifyButtonLabel: 'Approve KYC',
  error: null,
  address: null
}

const mapStateToProps = ({ kyc, mining: { isMining } }) => ({
  ...kyc,
  isMining,
  verifyButtonLabel: kyc.verifying
    ? 'Approving KYC'
    : KYCVerification.defaultPropTypes.verifyButtonLabel
})

const mapDispatchToProps = dispatch => ({
  doVerifyKYC: evt => dispatch(verifyKYC(evt.target.form.address.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(KYCVerification)
