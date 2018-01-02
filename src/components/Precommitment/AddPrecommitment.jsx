import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Form, FormGroup, Col, Button } from 'react-bootstrap'

import { ZERO_ADDRESS } from '../../constants'

import stringIfNotNull from '../../utils/stringIfNotNull'

import addPrecommitment from './addPrecommitment'

const AddPrecommitment = ({
  doAddPrecommitment,
  adding,
  isMining,
  buttonLabel,
  error,
  beneficiary,
  tokensAllocated,
  halfVesting
}) => (
  <Form className="form-horizontal" id="add-precommitment">
    <h3>Add Precommitment</h3>
    <FormGroup className={error ? 'has-error' : null}>
      <Col xs={3}>
        <label>Beneficiary address</label>
        <input
          className="form-control"
          name="beneficiary"
          placeholder={ZERO_ADDRESS}
          defaultValue={beneficiary}
          disabled={adding || isMining}
        />
      </Col>
      <Col xs={2}>
        <label>Tokens allocated</label>
        <input
          className="form-control"
          name="tokensAllocated"
          defaultValue={tokensAllocated}
          disabled={adding || isMining}
        />
      </Col>
      <Col xs={2}>
        <label>Half Vesting?</label>
        <select
          className="form-control"
          name="halfVesting"
          defaultValue={halfVesting}
          disabled={adding || isMining}
        >
          <option key="choose" value="">
            Choose…
          </option>
          <option key="chooseTrue" value="true">
            Yes
          </option>
          <option key="chooseFalse" value="false">
            No
          </option>
        </select>
      </Col>
      <Col xs={3}>
        <label>Do it</label>
        <br />
        <Button
          bsStyle="success"
          onClick={doAddPrecommitment}
          disabled={adding || isMining}
        >
          {buttonLabel}
        </Button>
      </Col>
    </FormGroup>
    {error && <p className="text-warning">{error}</p>}
  </Form>
)

AddPrecommitment.propTypes = {
  doAddPrecommitment: PropTypes.func.isRequired,
  isMining: PropTypes.bool,
  adding: PropTypes.bool,
  buttonLabel: PropTypes.string,
  error: PropTypes.string,
  beneficiary: PropTypes.string,
  tokensAllocated: PropTypes.string,
  halfVesting: PropTypes.oneOf(['true', 'false'])
}

AddPrecommitment.defaultPropTypes = {
  adding: false,
  isMining: false,
  buttonLabel: 'Add Precommitment',
  error: null,
  beneficiary: null,
  tokensAllocated: null,
  halfVesting: 'false'
}

const mapStateToProps = ({
  precommitment: { tokensAllocated, halfVesting, ...precommitment },
  mining: { isMining }
}) => ({
  ...precommitment,
  isMining,
  halfVesting: stringIfNotNull(halfVesting),
  tokensAllocated: stringIfNotNull(tokensAllocated),
  buttonLabel: precommitment.adding
    ? 'Adding Precommitment'
    : AddPrecommitment.defaultPropTypes.buttonLabel
})

const mapDispatchToProps = dispatch => ({
  doAddPrecommitment: evt => {
    const { beneficiary, tokensAllocated, halfVesting } = evt.target.form
    dispatch(
      addPrecommitment(
        beneficiary.value, // string — address
        tokensAllocated.value, // string
        halfVesting.value // string YES or NO
      )
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPrecommitment)
