import React from 'react'
import { Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import KYC from './pages/KYC.jsx'
import Precommitments from './pages/Precommitments.jsx'

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/kyc" component={KYC} />
    <Route exact path="/precommitments" component={Precommitments} />
  </div>
)

export default App
