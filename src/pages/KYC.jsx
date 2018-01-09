import React from 'react'

import PageWithOwner from '../components/PageWithOwner.jsx'
import Owner from '../components/Owner/Owner.jsx'
import StatusCheck from '../components/StatusCheck/StatusCheck.jsx'
import KYCVerification from '../components/KYC/KYCVerification.jsx'
import BulkVerifyKYC from '../components/BulkKYC/BulkVerifyKYC.jsx'

const KYC = () => (
  <PageWithOwner slug="kyc" title="Selfkey Crowdsale: KYC" heading="KYC">
    {({ isOwner }) => (
      <section>
        <Owner isOwner={isOwner} />
        <StatusCheck />
        {isOwner && (
          <section id="kyc-verification">
            <KYCVerification />
            <BulkVerifyKYC />
          </section>
        )}
      </section>
    )}
  </PageWithOwner>
)

export default KYC
