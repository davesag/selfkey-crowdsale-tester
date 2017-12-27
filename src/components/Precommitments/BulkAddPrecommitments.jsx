import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Form, FormGroup, Col, Button } from 'react-bootstrap'

import { abiPropType } from '../../utils/shapes'
import addPrecommitments from './addPrecommitments'

const BulkAddPrecommitments = ({
  doAddPrecommitments,
  adding,
  buttonLabel,
  error,
  data,
  abi
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
          onClick={doAddPrecommitments(abi)}
          disabled={adding}
        >
          {buttonLabel}
        </Button>
      </Col>
    </FormGroup>
    {error && <p className="danger">{error}</p>}
  </Form>
)

BulkAddPrecommitments.propTypes = {
  doAddPrecommitments: PropTypes.func.isRequired,
  adding: PropTypes.bool,
  buttonLabel: PropTypes.string,
  error: PropTypes.string,
  data: PropTypes.string,
  abi: abiPropType.isRequired
}

BulkAddPrecommitments.defaultPropTypes = {
  adding: false,
  buttonLabel: 'Bulk Add Precommitments',
  error: null,
  data: null
}

const mapStateToProps = ({ data, ...precommitments }) => ({
  ...precommitments,
  data: data ? data.map(d => d.join(',')).join('\n') : null,
  buttonLabel: precommitments.adding
    ? 'Adding Precommitments'
    : BulkAddPrecommitments.defaultPropTypes.buttonLabel
})

const mapDispatchToProps = dispatch => ({
  doAddPrecommitments: abi => evt => {
    dispatch(addPrecommitments(evt.target.form.data.value, abi))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(
  BulkAddPrecommitments
)
