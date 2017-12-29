import React from 'react'

import PageWithCrowdsale from '../components/PageWithCrowdsale.jsx'
import Owner from '../components/Owner/Owner.jsx'
import CrowdsaleData from '../components/Crowdsale/CrowdsaleData.jsx'
import CrowdsaleDates from '../components/Crowdsale/CrowdsaleDates.jsx'
import CrowdsaleStats from '../components/Crowdsale/CrowdsaleStats.jsx'
import FinalizeCrowdsale from '../components/Finalize/FinalizeCrowdsale.jsx'

const showFinalizeButton = (isOwner, isFinalized) => isOwner && !isFinalized

const Home = () => (
  <PageWithCrowdsale
    slug="home"
    title="Selfkey Crowdsale: Stats"
    heading="Selfkey Crowdsale Stats"
  >
    {({ SelfkeyCrowdsale, isOwner }) => (
      <CrowdsaleData>
        {({
          startTime,
          endTime,
          tokensPurchased,
          isFinalized,
          foundationBalance,
          foundersBalance,
          walletBalance
        }) => (
          <section>
            <Owner isOwner={isOwner} />
            <CrowdsaleDates startDate={startTime} endDate={endTime} />
            <CrowdsaleStats
              tokensPurchased={tokensPurchased}
              isFinalized={isFinalized}
              foundationBalance={foundationBalance}
              foundersBalance={foundersBalance}
              walletBalance={walletBalance}
            />
            {showFinalizeButton(isOwner, isFinalized) && (
              <FinalizeCrowdsale abi={SelfkeyCrowdsale} />
            )}
          </section>
        )}
      </CrowdsaleData>
    )}
  </PageWithCrowdsale>
)

export default Home
