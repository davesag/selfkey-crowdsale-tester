import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Web3Provider } from 'react-web3'

import registerServiceWorker from './registerServiceWorker'
import store, { history } from './store'

import '../node_modules/font-awesome/css/font-awesome.min.css'
import './index.css'

import App from './App.jsx'

const target = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Web3Provider>
        <div>
          <App />
        </div>
      </Web3Provider>
    </ConnectedRouter>
  </Provider>,
  target
)

registerServiceWorker()
