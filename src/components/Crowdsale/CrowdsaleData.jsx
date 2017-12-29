import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { abiPropType, bigNumberShape } from '../../utils/shapes'
import getCrowdsaleData from './getCrowdsaleData'

class CrowdsaleData extends React.Component {
  componentWillMount() {
    const { abi, doGetCrowdsaleData } = this.props
    doGetCrowdsaleData(abi)
  }

  render() {
    const {
      loading,
      error,
      startTime,
      endTime,
      tokensPurchased,
      isFinalized
    } = this.props
    if (loading) return <p>loading crowdsale data</p>
    if (error) return <p>error: {error}</p>
    if (startTime === null || endTime === null || tokensPurchased === null) {
      console.debug('awaiting data')
      return null
    }
    return (
      <section id="crowdsale-data">
        {this.props.children({
          startTime,
          endTime,
          tokensPurchased,
          isFinalized
        })}
      </section>
    )
  }
}

CrowdsaleData.propTypes = {
  children: PropTypes.func.isRequired,
  doGetCrowdsaleData: PropTypes.func.isRequired,
  abi: abiPropType.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  startTime: PropTypes.number,
  endTime: PropTypes.number,
  tokensPurchased: PropTypes.shape(bigNumberShape),
  isFinalized: PropTypes.bool
}

CrowdsaleData.defaultPropTypes = {
  loading: false,
  error: null,
  startTime: null,
  endTime: null,
  tokensPurchased: null,
  isFinalized: null
}

const mapStateToProps = ({ crowdsale }) => ({ ...crowdsale })

const mapDispatchToProps = dispatch => ({
  doGetCrowdsaleData: abi => dispatch(getCrowdsaleData(abi))
})

export default connect(mapStateToProps, mapDispatchToProps)(CrowdsaleData)
