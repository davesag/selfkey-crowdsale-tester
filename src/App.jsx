import React from 'react'
import { Route } from 'react-router-dom'

import Home from './pages/Home.jsx'

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
  </div>
)

export default App
