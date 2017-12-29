import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { bigNumberShape } from '../../utils/shapes'
import getCrowdsaleData from './getCrowdsaleData'

class CrowdsaleData extends React.Component {
  componentWillMount() {
    const { doGetCrowdsaleData } = this.props
    doGetCrowdsaleData()
  }

  render() {
    const {
      loading,
      error,
      startTime,
      endTime,
      tokensPurchased,
      isFinalized,
      foundationBalance,
      foundersBalance,
      walletBalance
    } = this.props
    if (loading) return <p>loading crowdsale data</p>
    if (error) return <p>error: {error}</p>
    if (startTime === null) return null

    return (
      <section id="crowdsale-data">
        {this.props.children({
          startTime,
          endTime,
          tokensPurchased,
          isFinalized,
          foundationBalance,
          foundersBalance,
          walletBalance
        })}
      </section>
    )
  }
}

CrowdsaleData.propTypes = {
  children: PropTypes.func.isRequired,
  doGetCrowdsaleData: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  startTime: PropTypes.number,
  endTime: PropTypes.number,
  tokensPurchased: PropTypes.shape(bigNumberShape),
  isFinalized: PropTypes.bool,
  foundationBalance: PropTypes.shape(bigNumberShape),
  foundersBalance: PropTypes.shape(bigNumberShape),
  walletBalance: PropTypes.shape(bigNumberShape)
}

CrowdsaleData.defaultPropTypes = {
  loading: false,
  error: null,
  startTime: null,
  endTime: null,
  tokensPurchased: null,
  isFinalized: null,
  foundationBalance: null,
  foundersBalance: null,
  walletBalance: null
}

const mapStateToProps = ({ crowdsale }) => ({ ...crowdsale })

const mapDispatchToProps = dispatch => ({
  doGetCrowdsaleData: () => dispatch(getCrowdsaleData())
})

export default connect(mapStateToProps, mapDispatchToProps)(CrowdsaleData)
