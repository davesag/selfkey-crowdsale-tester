import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import loadABI from './loadABI'

class ABI extends React.Component {
  componentWillMount() {
    const { contracts, abis, doLoadABI } = this.props
    contracts.forEach(contract => {
      if (!abis[contract]) doLoadABI(contract)
    })
  }

  shouldComponentUpdate({ loading }) {
    return this.props.loading !== loading
  }

  render() {
    const { abis, loading, errors, contracts } = this.props
    if (loading) return null
    if (errors) {
      console.error('found errors', errors)
      return null
    }
    if (Object.keys(abis).length !== contracts.length) {
      console.debug('have not loaded ABIs yet')
      return null
    }
    return <section id="abis">{this.props.children({ abis })}</section>
  }
}

ABI.propTypes = {
  children: PropTypes.func.isRequired,
  contracts: PropTypes.arrayOf(PropTypes.string).isRequired,
  doLoadABI: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.arrayOf(PropTypes.string),
  abis: PropTypes.shape({}) // custom validator no longer supported.
}

ABI.defaultProps = {
  loading: false,
  errors: null,
  abis: {}
}

const anyLoading = abis =>
  !!Object.keys(abis).find(contract => abis[contract].loading)

const hasError = abis =>
  Object.keys(abis).filter(contract => abis[contract].error).length > 0

const collectErrors = abis =>
  Object.keys(abis)
    .filter(contract => abis[contract].error)
    .map(contract => abis[contract].error)

const mapStateToProps = ({ contract }) => {
  if (anyLoading(contract)) return { loading: true }
  const loading = false
  if (hasError(contract)) return { loading, errors: collectErrors(contract) }
  const abis = Object.keys(contract).reduce((acc, elem) => {
    acc[elem] = contract[elem].abi
    return acc
  }, {})
  return { loading, errors: null, abis }
}

const mapDispatchToProps = dispatch => ({
  doLoadABI: contract => dispatch(loadABI(contract))
})

export default connect(mapStateToProps, mapDispatchToProps)(ABI)
