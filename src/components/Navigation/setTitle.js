import makeAction from '../../utils/actionMaker'
import { TITLE_SET } from './actions'

const setTitle = title => dispatch => {
  dispatch(makeAction(TITLE_SET, title))
}

export default setTitle
