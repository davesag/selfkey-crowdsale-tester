import React from 'react'

import { Row, Col } from 'react-bootstrap'

const year = new Date().getFullYear()
const copyrightText = `©${year} SelfKeyFoundation`

const Footer = () => (
  <footer>
    <Row>
      <Col xs={12}>
        <p>{copyrightText}</p>
      </Col>
    </Row>
  </footer>
)

export default Footer
