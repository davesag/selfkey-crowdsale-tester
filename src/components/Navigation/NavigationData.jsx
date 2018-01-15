import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { navigationShape } from '../../utils/shapes'
import setTitle from './setTitle'

class NavigationData extends React.Component {
  constructor(props) {
    super(props)
    this.state = { lhs: props.lhs, rhs: props.rhs }
  }

  componentWillMount() {
    const { title, setPageTitle } = this.props
    setPageTitle(title)
  }

  componentWillReceiveProps(newProps) {
    const { title, setPageTitle } = this.props

    if (title !== newProps.title) setPageTitle(newProps.title)
  }

  shouldComponentUpdate({ title }) {
    return (title && !this.state.title) || this.state.title !== title
  }

  componentDidUpdate() {
    const changed = ['title', 'lhs', 'rhs'].reduce((acc, elem) => {
      if (this.state[elem] !== this.props[elem]) acc[elem] = this.props[elem]
      return acc
    }, {})
    if (Object.keys(changed).length > 0) this.setState(changed)
  }

  render() {
    return <section id="nav-data">{this.props.children(this.state)}</section>
  }
}

NavigationData.propTypes = {
  title: PropTypes.string,
  children: PropTypes.func.isRequired,
  lhs: PropTypes.shape(navigationShape.lhs).isRequired,
  rhs: PropTypes.shape(navigationShape.rhs).isRequired,
  setPageTitle: PropTypes.func.isRequired
}

NavigationData.defaultProps = {
  title: null
}

const mapStateToProps = ({ navigation: { lhs, rhs, title } }) => {
  return {
    title,
    lhs,
    rhs
  }
}

const mapDispatchToProps = dispatch => ({
  setPageTitle: title => {
    const pageTitle = title || 'SelfKey Crowdsale'
    return dispatch(setTitle(pageTitle))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(NavigationData)
