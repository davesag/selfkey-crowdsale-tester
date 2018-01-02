import React from 'react'

import { Row, Col } from 'react-bootstrap'
import MiningData from './Mining/MiningData.jsx'
import Mining from './Mining/Mining.jsx'

const year = new Date().getFullYear()
const copyrightText = `©${year} SelfKeyFoundation`

const Footer = () => (
  <footer>
    <Row>
      <Col xs={3}>
        <p>{copyrightText}</p>
      </Col>
      <Col xs={9}>
        <MiningData>
          {({ loading, isMining, block, error }) => (
            <Mining
              loading={loading}
              isMining={isMining}
              block={block}
              error={error}
            />
          )}
        </MiningData>
      </Col>
    </Row>
  </footer>
)

export default Footer
