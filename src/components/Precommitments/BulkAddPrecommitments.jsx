import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Form, FormGroup, Col, Button } from 'react-bootstrap'

import addPrecommitments from './addPrecommitments'
import { toString } from '../../utils/precommitmentCSV'

const BulkAddPrecommitments = ({
  doAddPrecommitments,
  adding,
  buttonLabel,
  error,
  data
}) => (
  <Form className="form-horizontal" id="add-precommitment">
    <h3>Bulk Add Precommitments</h3>
    <FormGroup className={error ? 'has-error' : null}>
      <Col xs={6}>
        <label htmlFor="beneficiary">
          Precommitment Data (address, tokens, half vesting?)
        </label>
        <textarea
          className="form-control"
          name="data"
          defaultValue={data}
          disabled={adding}
        />
      </Col>
      <Col xs={3}>
        <br />
        <Button
          bsStyle="success"
          onClick={doAddPrecommitments}
          disabled={adding}
        >
          {buttonLabel}
        </Button>
      </Col>
    </FormGroup>
    {error && <p className="text-warning">Error: {error}</p>}
  </Form>
)

BulkAddPrecommitments.propTypes = {
  doAddPrecommitments: PropTypes.func.isRequired,
  adding: PropTypes.bool,
  buttonLabel: PropTypes.string,
  error: PropTypes.string,
  data: PropTypes.string
}

BulkAddPrecommitments.defaultPropTypes = {
  adding: false,
  buttonLabel: 'Bulk Add Precommitments',
  error: null,
  data: null
}

const mapStateToProps = ({ precommitments: { data, ...precommitments } }) => ({
  ...precommitments,
  data: toString(data),
  buttonLabel: precommitments.adding
    ? 'Adding Precommitments'
    : BulkAddPrecommitments.defaultPropTypes.buttonLabel
})

const mapDispatchToProps = dispatch => ({
  doAddPrecommitments: evt =>
    dispatch(addPrecommitments(evt.target.form.data.value))
})

export default connect(mapStateToProps, mapDispatchToProps)(
  BulkAddPrecommitments
)
