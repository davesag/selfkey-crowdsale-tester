import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { Button } from 'react-bootstrap'

import { bigNumberShape } from '../../utils/shapes'

import getCrowdsaleData from './getCrowdsaleData'

const TEN_MINUTES = 1000 * 60 * 10

class CrowdsaleData extends React.Component {
  refreshData = () => {
    const { doGetCrowdsaleData } = this.props
    this.lastRefreshTime = new Date().getTime()
    doGetCrowdsaleData()
    this.refreshInterval = setInterval(() => {
      console.debug('checking again')
      this.lastRefreshTime = new Date().getTime()
      doGetCrowdsaleData()
    }, TEN_MINUTES)
  }

  componentWillMount() {
    this.refreshData()
  }

  componentWillUnmount() {
    clearInterval(this.refreshInterval)
  }

  render() {
    const {
      loading,
      error,
      children,
      doGetCrowdsaleData,
      ...props
    } = this.props

    const button = () => (
      <Button bsStyle="success" onClick={this.refreshData} disabled={loading}>
        {loading ? 'Loading crowdsale data…' : 'Update Crowdsale Data'}
      </Button>
    )

    return (
      <section id="crowdsale-data">
        {loading ? (
          button()
        ) : (
          <div>
            {button()}
            <p className="text-info">
              Cowdsale Data will reload every 10 Minutes
            </p>
          </div>
        )}
        {error && <p className="text-danger">Error: {error}</p>}
        {children(props)}
      </section>
    )
  }
}

CrowdsaleData.propTypes = {
  children: PropTypes.func.isRequired,
  doGetCrowdsaleData: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  isFinalized: PropTypes.bool,
  startTime: PropTypes.number,
  endTime: PropTypes.number,
  tokensPurchased: PropTypes.shape(bigNumberShape),
  foundationBalance: PropTypes.shape(bigNumberShape),
  walletBalance: PropTypes.shape(bigNumberShape)
}

CrowdsaleData.defaultPropTypes = {
  loading: false,
  error: null,
  isFinalized: null,
  startTime: null,
  endTime: null,
  tokensPurchased: null,
  foundationBalance: null,
  walletBalance: null
}

const mapStateToProps = ({ crowdsale }) => ({ ...crowdsale })

const mapDispatchToProps = dispatch => ({
  doGetCrowdsaleData: () => dispatch(getCrowdsaleData())
})

export default connect(mapStateToProps, mapDispatchToProps)(CrowdsaleData)
