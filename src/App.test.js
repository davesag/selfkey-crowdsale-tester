import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import App from './App.jsx'
import store from './store'

const history = createMemoryHistory('/')

it('renders without crashing', () => {
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
