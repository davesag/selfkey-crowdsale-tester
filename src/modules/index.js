import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import navigation from '../components/Navigation/reducer'
import statusCheck from '../components/StatusCheck/reducer'
import kyc from '../components/KYC/reducer'
import contract from '../components/Contract/reducer'
import crowdsale from '../components/Crowdsale/reducer'

export default combineReducers({
  routing,
  navigation,
  statusCheck,
  kyc,
  contract,
  crowdsale
})
