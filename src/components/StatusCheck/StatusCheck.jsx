import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Form, FormGroup, Col, Button } from 'react-bootstrap'

import checkStatus from './checkStatus'

const StatusCheck = ({
  doCheckStatus,
  checkingStatus,
  status,
  buttonLabel,
  error,
  address
}) => (
  <Form className="form-horizontal" id="status-check">
    <h3>KYC Status Check</h3>
    <FormGroup className={error ? 'has-error' : null}>
      <Col xs={3}>
        <input
          className="form-control"
          name="address"
          placeholder="0x00000000000000000000000000000"
          defaultValue={address}
          disabled={checkingStatus}
        />
      </Col>
      <Col xs={3}>
        <Button onClick={doCheckStatus} disabled={checkingStatus}>
          {buttonLabel}
        </Button>
      </Col>
    </FormGroup>
    {address &&
      address !== '' &&
      status !== null && (
        <p>
          <span className="address">{address}</span>
          <b>{status ? 'is verified' : 'is not verified'}</b>
        </p>
      )}
    {error && <p className="danger">{error}</p>}
  </Form>
)

StatusCheck.propTypes = {
  doCheckStatus: PropTypes.func.isRequired,
  checkingStatus: PropTypes.bool,
  status: PropTypes.bool,
  buttonLabel: PropTypes.string,
  address: PropTypes.string,
  error: PropTypes.string
}

StatusCheck.defaultPropTypes = {
  checkingStatus: false,
  status: null,
  buttonLabel: 'Check Status',
  error: null,
  address: null
}

const mapStateToProps = ({ statusCheck }) => ({
  ...statusCheck,
  buttonLabel: statusCheck.checkingStatus
    ? 'Checking Status'
    : StatusCheck.defaultPropTypes.buttonLabel
})

const mapDispatchToProps = dispatch => ({
  doCheckStatus: evt => dispatch(checkStatus(evt.target.form.address.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(StatusCheck)
