import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import navigation from '../components/Navigation/reducer'

export default combineReducers({
  routing,
  navigation
})
