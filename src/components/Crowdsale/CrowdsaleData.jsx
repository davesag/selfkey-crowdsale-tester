import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import {
  abiConstructorShape,
  abiFunctionShape,
  abiEventShape,
  abiFallbackShape
} from '../../utils/shapes'
import getCrowdsaleData from './getCrowdsaleData'

class CrowdsaleData extends React.Component {
  componentWillMount() {
    const { abi, doGetCrowdsaleData } = this.props
    console.debug('abi', abi)
    doGetCrowdsaleData(abi)
  }

  render() {
    const {
      loading,
      error,
      startTime,
      endTime,
      weiRaised,
      tokensPurchased
    } = this.props
    if (loading) return <p>loading crowdsale data</p>
    if (error) return <p>error: {error}</p>
    if (
      startTime === null ||
      endTime === null ||
      weiRaised === null ||
      tokensPurchased === null
    ) {
      console.debug('awaiting data')
      return null
    }
    return (
      <section id="crowdsale-data">
        {this.props.children({
          startTime,
          endTime,
          weiRaised,
          tokensPurchased
        })}
      </section>
    )
  }
}

CrowdsaleData.propTypes = {
  children: PropTypes.func.isRequired,
  doGetCrowdsaleData: PropTypes.func.isRequired,
  abi: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape(abiConstructorShape),
      PropTypes.shape(abiFunctionShape),
      PropTypes.shape(abiEventShape),
      PropTypes.shape(abiFallbackShape)
    ])
  ).isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  startTime: PropTypes.number,
  endTime: PropTypes.number,
  weiRaised: PropTypes.number,
  tokensPurchased: PropTypes.number
}

CrowdsaleData.defaultPropTypes = {
  loading: false,
  error: null,
  startTime: null,
  endTime: null,
  weiRaised: null,
  tokensPurchased: null
}

const mapStateToProps = ({
  crowdsale: { loading, error, startTime, endTime, weiRaised, tokensPurchased }
}) => ({
  loading,
  error,
  startTime,
  endTime,
  weiRaised,
  tokensPurchased
})

const mapDispatchToProps = dispatch => ({
  doGetCrowdsaleData: abi => dispatch(getCrowdsaleData(abi))
})

export default connect(mapStateToProps, mapDispatchToProps)(CrowdsaleData)
