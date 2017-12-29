import React from 'react'

import PageWithOwner from '../components/PageWithOwner.jsx'
import Owner from '../components/Owner/Owner.jsx'
import StatusCheck from '../components/StatusCheck/StatusCheck.jsx'
import KYCVerification from '../components/KYC/KYCVerification.jsx'

const KYC = () => (
  <PageWithOwner slug="kyc" title="Selfkey Crowdsale: KYC" heading="KYC">
    {({ isOwner }) => (
      <section>
        <Owner isOwner={isOwner} />
        <StatusCheck />
        {isOwner && <KYCVerification />}
      </section>
    )}
  </PageWithOwner>
)

export default KYC
