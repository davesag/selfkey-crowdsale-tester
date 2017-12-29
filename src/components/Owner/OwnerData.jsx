import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import getOwner from './getOwner'

class OwnerData extends React.Component {
  componentWillMount() {
    const { doGetOwner } = this.props
    doGetOwner()
  }

  render() {
    const { loading, error, isOwner } = this.props
    if (loading) return <p>loading crowdsale owner</p>
    if (error) return <p>error: {error}</p>
    return <section id="owner">{this.props.children({ isOwner })}</section>
  }
}

OwnerData.propTypes = {
  children: PropTypes.func.isRequired,
  doGetOwner: PropTypes.func.isRequired,
  isOwner: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.string
}

OwnerData.defaultPropTypes = {
  loading: false,
  error: null,
  isOwner: false
}

const mapStateToProps = ({ owner: { loading, error, isOwner } }) => ({
  loading,
  error,
  isOwner
})

const mapDispatchToProps = dispatch => ({
  doGetOwner: () => dispatch(getOwner())
})

export default connect(mapStateToProps, mapDispatchToProps)(OwnerData)
