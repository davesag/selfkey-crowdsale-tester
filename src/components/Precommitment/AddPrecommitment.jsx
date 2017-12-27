import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Form, FormGroup, Col, Button } from 'react-bootstrap'

import { ZERO_ADDRESS } from '../../constants'

import { abiPropType } from '../../utils/shapes'
import addPrecommitment from './addPrecommitment'

const AddPrecommitment = ({
  doAddPrecommitment,
  adding,
  buttonLabel,
  error,
  beneficiary,
  tokensAllocated,
  halfVesting,
  abi
}) => (
  <Form className="form-horizontal" id="kyc-verification">
    <h3>Add Precommitment</h3>
    <FormGroup className={error ? 'has-error' : null}>
      <Col xs={3}>
        <label for="beneficiary">Beneficiary address</label>
        <input
          className="form-control"
          name="beneficiary"
          placeholder={ZERO_ADDRESS}
          defaultValue={beneficiary}
          disabled={adding}
        />
      </Col>
      <Col xs={2}>
        <label for="tokensAllocated">Tokens allocated</label>
        <input
          className="form-control"
          name="tokensAllocated"
          defaultValue={tokensAllocated}
          type="number"
          disabled={adding}
        />
      </Col>
      <Col xs={2}>
        <label for="halfVesting">Half Vesting?</label>
        <select
          className="form-control"
          name="halfVesting"
          defaultValue={halfVesting}
          disabled={adding}
        >
          <option key="choose" value="">
            Choose…
          </option>
          <option key="chooseTrue" value={true}>
            Yes
          </option>
          <option key="chooseFalse" value={false}>
            No
          </option>
        </select>
      </Col>
      <Col xs={3}>
        <label>Do it</label>
        <br />
        <Button
          bsStyle="success"
          onClick={doAddPrecommitment(abi)}
          disabled={adding}
        >
          {buttonLabel}
        </Button>
      </Col>
    </FormGroup>
    {error && <p className="danger">{error}</p>}
  </Form>
)

AddPrecommitment.propTypes = {
  doAddPrecommitment: PropTypes.func.isRequired,
  adding: PropTypes.bool,
  buttonLabel: PropTypes.string,
  error: PropTypes.string,
  beneficiary: PropTypes.string,
  tokensAllocated: PropTypes.number,
  halfVesting: PropTypes.bool,
  abi: abiPropType.isRequired
}

AddPrecommitment.defaultPropTypes = {
  adding: false,
  buttonLabel: 'Add Precommitment',
  error: null,
  beneficiary: null,
  tokensAllocated: null,
  halfVesting: false
}

const mapStateToProps = ({ precommitment }) => ({
  ...precommitment,
  buttonLabel: precommitment.adding
    ? 'Adding Precommitment'
    : AddPrecommitment.defaultPropTypes.buttonLabel
})

const mapDispatchToProps = dispatch => ({
  doAddPrecommitment: abi => evt => {
    const { beneficiary, tokensAllocated, halfVesting } = evt.target.form
    dispatch(
      addPrecommitment(
        beneficiary.value,
        tokensAllocated.value,
        halfVesting.value,
        abi
      )
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AddPrecommitment)
