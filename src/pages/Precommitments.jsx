import React from 'react'

import PageWithCrowdsale from '../components/PageWithCrowdsale.jsx'
import Owner from '../components/Owner/Owner.jsx'
import AddPrecommitment from '../components/Precommitment/AddPrecommitment.jsx'
import BulkAddPrecommitments from '../components/Precommitments/BulkAddPrecommitments.jsx'

const Precommitments = () => (
  <PageWithCrowdsale
    slug="precommitments"
    title="Selfkey Crowdsale: Precommitment"
    heading="Precommitments"
  >
    {({ SelfkeyCrowdsale, isOwner }) => {
      if (!isOwner) return null
      return (
        <section>
          <Owner isOwner={isOwner} />
          <AddPrecommitment abi={SelfkeyCrowdsale} />
          <BulkAddPrecommitments abi={SelfkeyCrowdsale} />
        </section>
      )
    }}
  </PageWithCrowdsale>
)

export default Precommitments
