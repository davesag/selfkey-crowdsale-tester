import React from 'react'

import PageWithCrowdsale from '../components/PageWithCrowdsale.jsx'
import Owner from '../components/Owner/Owner.jsx'
import CrowdsaleData from '../components/Crowdsale/CrowdsaleData.jsx'
import CrowdsaleDates from '../components/Crowdsale/CrowdsaleDates.jsx'
import CrowdsaleStats from '../components/Crowdsale/CrowdsaleStats.jsx'

const Home = () => (
  <PageWithCrowdsale
    slug="home"
    title="Selfkey Crowdsale: Stats"
    heading="Selfkey Crowdsale Stats"
  >
    {({ SelfkeyCrowdsale, isOwner }) => (
      <CrowdsaleData abi={SelfkeyCrowdsale}>
        {({ startTime, endTime, tokensPurchased }) => (
          <section>
            <Owner isOwner={isOwner} />
            <CrowdsaleDates startDate={startTime} endDate={endTime} />
            <CrowdsaleStats tokensPurchased={tokensPurchased} />
          </section>
        )}
      </CrowdsaleData>
    )}
  </PageWithCrowdsale>
)

export default Home
