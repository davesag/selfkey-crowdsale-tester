import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import setTitle from './Navigation/setTitle'

class Title extends React.Component {
  constructor(props) {
    super(props)
    this.state = { title: props.title }
  }

  componentWillMount() {
    this.props.setPageTitle(this.state.title)
  }

  render() {
    document.title = this.state.title
    return null
  }
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  setPageTitle: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  setPageTitle: title => dispatch(setTitle(title))
})

export default connect(null, mapDispatchToProps)(Title)
