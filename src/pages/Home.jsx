import React from 'react'

import { Row, Col } from 'react-bootstrap'

import Page from '../components/Page.jsx'
import Title from '../components/Title.jsx'
import ABI from '../components/Contract/ABI.jsx'
import OwnerData from '../components/Owner/OwnerData.jsx'
import Owner from '../components/Owner/Owner.jsx'
import CrowdsaleData from '../components/Crowdsale/CrowdsaleData.jsx'
import CrowdsaleDates from '../components/Crowdsale/CrowdsaleDates.jsx'
import CrowdsaleStats from '../components/Crowdsale/CrowdsaleStats.jsx'
import StatusCheck from '../components/StatusCheck/StatusCheck.jsx'
import KYCVerification from '../components/KYC/KYCVerification.jsx'
import AddPrecommitment from '../components/Precommitment/AddPrecommitment.jsx'
import BulkAddPrecommitments from '../components/Precommitments/BulkAddPrecommitments.jsx'

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
                <ABI contracts={['SelfkeyCrowdsale', 'SelfkeyToken']}>
                  {({ abis }) => {
                    const { SelfkeyCrowdsale } = abis
                    console.debug('SelfkeyCrowdsale', SelfkeyCrowdsale)
                    if (!SelfkeyCrowdsale) return null
                    return (
                      <OwnerData abi={SelfkeyCrowdsale}>
                        {({ isOwner }) => (
                          <CrowdsaleData abi={SelfkeyCrowdsale}>
                            {({ startTime, endTime, tokensPurchased }) => (
                              <section>
                                <Owner isOwner={isOwner} />
                                <CrowdsaleDates
                                  startDate={startTime}
                                  endDate={endTime}
                                />
                                <CrowdsaleStats
                                  tokensPurchased={tokensPurchased}
                                />
                                <StatusCheck abi={SelfkeyCrowdsale} />
                                {isOwner && (
                                  <section>
                                    <KYCVerification abi={SelfkeyCrowdsale} />
                                    <AddPrecommitment abi={SelfkeyCrowdsale} />
                                    <BulkAddPrecommitments
                                      abi={SelfkeyCrowdsale}
                                    />
                                  </section>
                                )}
                              </section>
                            )}
                          </CrowdsaleData>
                        )}
                      </OwnerData>
                    )
                  }}
                </ABI>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    )}
  </Page>
)

export default Home
