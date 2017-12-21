import React from 'react'

import { Row, Col } from 'react-bootstrap'

import Page from '../components/Page.jsx'
import Title from '../components/Title.jsx'
import CrowdsaleDates from '../components/Crowdsale/CrowdsaleDates.jsx'
import CrowdsaleStats from '../components/Crowdsale/CrowdsaleStats.jsx'
import StatusCheck from '../components/StatusCheck/StatusCheck.jsx'
import KYCVerification from '../components/KYC/KYCVerification.jsx'

const ONE_DAY = 24 * 60 * 60 * 1000

const now = new Date().getTime()

const dummyData = {
  startTime: now - ONE_DAY,
  endTime: now + ONE_DAY,
  weiRaised: 3331029494852,
  tokensPurchased: 8888120929292923334110
}

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
                <CrowdsaleDates
                  startDate={dummyData.startTime}
                  endDate={dummyData.endTime}
                />
                <CrowdsaleStats
                  weiRaised={dummyData.weiRaised}
                  tokensPurchased={dummyData.tokensPurchased}
                />
                <StatusCheck />
                <KYCVerification />
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    )}
  </Page>
)

export default Home
