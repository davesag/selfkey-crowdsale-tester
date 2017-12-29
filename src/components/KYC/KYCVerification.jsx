import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Form, FormGroup, Col, Button } from 'react-bootstrap'

import { ZERO_ADDRESS } from '../../constants'

import verifyKYC from './verifyKYC'
import unverifyKYC from './unverifyKYC'

const KYCVerification = ({
  doVerifyKYC,
  doUnverifyKYC,
  verifying,
  unverifying,
  verifyButtonLabel,
  unverifyButtonLabel,
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
          disabled={unverifying || verifying}
        />
      </Col>
      <Col xs={3}>
        <Button
          bsStyle="success"
          onClick={doVerifyKYC}
          disabled={unverifying || verifying}
        >
          {verifyButtonLabel}
        </Button>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col xs={3} xsOffset={3}>
        <Button
          bsStyle="danger"
          onClick={doUnverifyKYC}
          disabled={unverifying || verifying}
        >
          {unverifyButtonLabel}
        </Button>
      </Col>
    </FormGroup>
    {error && <p className="text-warning">{error}</p>}
  </Form>
)

KYCVerification.propTypes = {
  doVerifyKYC: PropTypes.func.isRequired,
  doUnverifyKYC: PropTypes.func.isRequired,
  verifying: PropTypes.bool,
  unverifying: PropTypes.bool,
  verifyButtonLabel: PropTypes.string,
  unverifyButtonLabel: PropTypes.string,
  error: PropTypes.string,
  address: PropTypes.string
}

KYCVerification.defaultPropTypes = {
  verifying: false,
  unverifying: false,
  verifyButtonLabel: 'Approve KYC',
  unverifyButtonLabel: 'Reject KYC',
  error: null,
  address: null
}

const mapStateToProps = ({ kyc }) => ({
  ...kyc,
  verifyButtonLabel: kyc.verifying
    ? 'Approving KYC'
    : KYCVerification.defaultPropTypes.verifyButtonLabel,
  unverifyButtonLabel: kyc.unverifying
    ? 'Rejecting KYC'
    : KYCVerification.defaultPropTypes.unverifyButtonLabel
})

const mapDispatchToProps = dispatch => ({
  doVerifyKYC: evt => dispatch(verifyKYC(evt.target.form.address.value)),
  doUnverifyKYC: evt => dispatch(unverifyKYC(evt.target.form.address.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(KYCVerification)
