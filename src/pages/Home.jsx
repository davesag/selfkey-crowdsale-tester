import React from 'react'

import { Row, Col } from 'react-bootstrap'

import Page from '../components/Page.jsx'
import Title from '../components/Title.jsx'

const Home = () => (
  <Page>
    {() => (
      <section id="home">
        <Title title="Selfkey Crowdsale: Home" />
        <Row className="dashboard">
          <Col xs={12}>
            <Row>
              <Col xs={12}>
                <h2>Selfkey Test Crowdsale</h2>
                <p>put something here</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    )}
  </Page>
)

export default Home
