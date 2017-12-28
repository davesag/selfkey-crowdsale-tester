import React from 'react'

import PageWithCrowdsale from '../components/PageWithCrowdsale.jsx'
import Owner from '../components/Owner/Owner.jsx'
import StatusCheck from '../components/StatusCheck/StatusCheck.jsx'
import KYCVerification from '../components/KYC/KYCVerification.jsx'

const KYC = () => (
  <PageWithCrowdsale slug="kyc" title="Selfkey Crowdsale: KYC" heading="KYC">
    {({ SelfkeyCrowdsale, isOwner }) => (
      <section>
        <Owner isOwner={isOwner} />
        <StatusCheck abi={SelfkeyCrowdsale} />
        {isOwner && <KYCVerification abi={SelfkeyCrowdsale} />}
      </section>
    )}
  </PageWithCrowdsale>
)

export default KYC
