import React from 'react'
import PropTypes from 'prop-types'

import { Row, Col } from 'react-bootstrap'

import Page from './Page.jsx'
import Title from './Title.jsx'
import ABI from './Contract/ABI.jsx'
import OwnerData from './Owner/OwnerData.jsx'

const CONTRACTS = ['SelfkeyCrowdsale', 'SelfkeyToken']

const PageWithCrowdsale = ({ slug, title, heading, children }) => (
  <Page>
    {() => (
      <section id={slug}>
        <Title title={title} />
        <Row className="dashboard">
          <Col xs={12}>
            <Row>
              <Col xs={12}>
                <h2>{heading}</h2>
                <ABI contracts={CONTRACTS}>
                  {({ abis }) => {
                    const { SelfkeyCrowdsale } = abis
                    if (!SelfkeyCrowdsale)
                      return <p>Missing Crowdsale Contract ABI</p>
                    return (
                      <OwnerData abi={SelfkeyCrowdsale}>
                        {({ isOwner }) =>
                          children({ SelfkeyCrowdsale, isOwner })
                        }
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

PageWithCrowdsale.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.func.isRequired
}

export default PageWithCrowdsale
