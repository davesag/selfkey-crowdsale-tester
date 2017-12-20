import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Row, Col } from 'react-bootstrap'

import NavigationData from './Navigation/NavigationData.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

const Page = ({ children }) => (
  <div>
    <NavigationData>
      {({ lhs, rhs }) => <Header lhs={lhs} rhs={rhs} />}
    </NavigationData>
    <Grid fluid>
      <Row>
        <Col xs={12}>{children()}</Col>
      </Row>
    </Grid>
    <Footer />
  </div>
)

Page.propTypes = {
  children: PropTypes.func.isRequired
}

export default Page
