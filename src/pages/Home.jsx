import React from 'react'

import PageWithCrowdsale from '../components/PageWithCrowdsale.jsx'
import Owner from '../components/Owner/Owner.jsx'
import CrowdsaleData from '../components/Crowdsale/CrowdsaleData.jsx'
import CrowdsaleDates from '../components/Crowdsale/CrowdsaleDates.jsx'
import CrowdsaleStats from '../components/Crowdsale/CrowdsaleStats.jsx'
import StatusCheck from '../components/StatusCheck/StatusCheck.jsx'
import KYCVerification from '../components/KYC/KYCVerification.jsx'
import AddPrecommitment from '../components/Precommitment/AddPrecommitment.jsx'
import BulkAddPrecommitments from '../components/Precommitments/BulkAddPrecommitments.jsx'

const Home = () => (
  <PageWithCrowdsale
    slug="home"
    title="Selfkey Crowdsale: Home"
    heading="Selfkey Test Crowdsale"
  >
    {({ SelfkeyCrowdsale, isOwner }) => (
      <CrowdsaleData abi={SelfkeyCrowdsale}>
        {({ startTime, endTime, tokensPurchased }) => (
          <section>
            <Owner isOwner={isOwner} />
            <CrowdsaleDates startDate={startTime} endDate={endTime} />
            <CrowdsaleStats tokensPurchased={tokensPurchased} />
            <StatusCheck abi={SelfkeyCrowdsale} />
            {isOwner && (
              <section>
                <KYCVerification abi={SelfkeyCrowdsale} />
                <AddPrecommitment abi={SelfkeyCrowdsale} />
                <BulkAddPrecommitments abi={SelfkeyCrowdsale} />
              </section>
            )}
          </section>
        )}
      </CrowdsaleData>
    )}
  </PageWithCrowdsale>
)

export default Home
