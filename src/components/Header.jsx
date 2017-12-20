import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import { navigationShape } from '../utils/shapes'

const navItem = (path, title) => (
  <LinkContainer key={path} to={`/${path}`}>
    <NavItem className={path}>{title}</NavItem>
  </LinkContainer>
)

const makeNav = menu => Object.keys(menu).map(item => navItem(item, menu[item]))

const Header = ({ lhs, rhs }) => (
  <Navbar fluid>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">Home</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav bsStyle="pills" className="lhs-nav">
        {makeNav(lhs)}
      </Nav>
      <Nav bsStyle="pills" pullRight>
        {makeNav(rhs)}
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  lhs: PropTypes.shape(navigationShape.lhs).isRequired,
  rhs: PropTypes.shape(navigationShape.rhs).isRequired
}

export default Header
