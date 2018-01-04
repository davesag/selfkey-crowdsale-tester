import React from 'react'

import PageWithOwner from '../components/PageWithOwner.jsx'
import Owner from '../components/Owner/Owner.jsx'
import CrowdsaleData from '../components/Crowdsale/CrowdsaleData.jsx'
import CrowdsaleDates from '../components/Crowdsale/CrowdsaleDates.jsx'
import CrowdsaleStats from '../components/Crowdsale/CrowdsaleStats.jsx'
import FinalizeCrowdsale from '../components/Finalize/FinalizeCrowdsale.jsx'

const showFinalizeButton = (isOwner, isFinalized) => isOwner && !isFinalized

const Home = () => (
  <PageWithOwner
    slug="home"
    title="Selfkey Crowdsale: Stats"
    heading="Selfkey Crowdsale Stats"
  >
    {({ isOwner }) => (
      <CrowdsaleData>
        {({ startTime, endTime, isFinalized, ...stats }) => (
          <section>
            <Owner isOwner={isOwner} />
            <CrowdsaleDates startDate={startTime} endDate={endTime} />
            <CrowdsaleStats isFinalized={isFinalized} {...stats} />
            {showFinalizeButton(isOwner, isFinalized) && <FinalizeCrowdsale />}
          </section>
        )}
      </CrowdsaleData>
    )}
  </PageWithOwner>
)

export default Home
