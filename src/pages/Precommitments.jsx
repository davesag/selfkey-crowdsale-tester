import React from 'react'

import PageWithOwner from '../components/PageWithOwner.jsx'
import Owner from '../components/Owner/Owner.jsx'
import AddPrecommitment from '../components/Precommitment/AddPrecommitment.jsx'
import BulkAddPrecommitments from '../components/Precommitments/BulkAddPrecommitments.jsx'

const Precommitments = () => (
  <PageWithOwner
    slug="precommitments"
    title="Selfkey Crowdsale: Precommitment"
    heading="Precommitments"
  >
    {({ isOwner }) => {
      if (!isOwner) return null
      return (
        <section>
          <Owner isOwner={isOwner} />
          <AddPrecommitment />
          <BulkAddPrecommitments />
        </section>
      )
    }}
  </PageWithOwner>
)

export default Precommitments
