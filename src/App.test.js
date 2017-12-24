import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import App from './App.jsx'
import store from './store'

const history = createMemoryHistory('/')

// TODO: Work out how to test this given it tries to load the ABIs immediately.
xit('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <App />
        </div>
      </ConnectedRouter>
    </Provider>,
    div
  )
})
