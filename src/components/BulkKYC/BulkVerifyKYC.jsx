import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Form, FormGroup, Col, Button } from 'react-bootstrap'

import bulkVerifyKYC from './bulkVerifyKYC'

const BulkVerifyKYC = ({
  doBulkVerifyKYC,
  isMining,
  verifying,
  buttonLabel,
  error,
  data
}) => (
  <Form className="form-horizontal" id="bulk-verify-kyc">
    <h3>Bulk Approve KYC</h3>
    <FormGroup className={error ? 'has-error' : null}>
      <Col xs={6}>
        <label htmlFor="beneficiary">Addresses</label>
        <textarea
          className="form-control"
          name="data"
          defaultValue={data}
          disabled={verifying || isMining}
        />
      </Col>
      <Col xs={3}>
        <br />
        <Button
          bsStyle="success"
          onClick={doBulkVerifyKYC}
          disabled={verifying || isMining}
        >
          {buttonLabel}
        </Button>
      </Col>
    </FormGroup>
    {error && <p className="text-warning">Error: {error}</p>}
  </Form>
)

BulkVerifyKYC.propTypes = {
  doBulkVerifyKYC: PropTypes.func.isRequired,
  isMining: PropTypes.bool,
  verifying: PropTypes.bool,
  buttonLabel: PropTypes.string,
  error: PropTypes.string,
  data: PropTypes.string
}

BulkVerifyKYC.defaultPropTypes = {
  isMining: false,
  verifying: false,
  buttonLabel: 'Approve All',
  error: null,
  data: null
}

const mapStateToProps = ({
  bulkKYC: { data, ...bulkKYC },
  mining: { isMining }
}) => ({
  ...bulkKYC,
  isMining,
  data: data.join('\n'),
  buttonLabel: bulkKYC.verifying
    ? 'Approving…'
    : BulkVerifyKYC.defaultPropTypes.buttonLabel
})

const mapDispatchToProps = dispatch => ({
  doBulkVerifyKYC: evt => dispatch(bulkVerifyKYC(evt.target.form.data.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(BulkVerifyKYC)
