import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import navigation from '../components/Navigation/reducer'
import statusCheck from '../components/StatusCheck/reducer'
import kyc from '../components/KYC/reducer'
import contract from '../components/Contract/reducer'
import crowdsale from '../components/Crowdsale/reducer'
import owner from '../components/Owner/reducer'
import precommitment from '../components/Precommitment/reducer'
import precommitments from '../components/Precommitments/reducer'
import finalize from '../components/Finalize/reducer'
import mining from '../components/Mining/reducer'
import bulkKYC from '../components/BulkKYC/reducer'

export default combineReducers({
  routing,
  navigation,
  statusCheck,
  kyc,
  contract,
  crowdsale,
  owner,
  precommitment,
  precommitments,
  finalize,
  mining,
  bulkKYC
})
