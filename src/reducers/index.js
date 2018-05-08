import { createReducer } from 'redux-act'
import { combineReducers } from 'redux'
import * as actions from '../actions'

export const initialState = {
  sample: {
    data: ''
  }
}

const sample = createReducer(
  {
    [actions.sampleAction]: state => {
      const nextState = Object.assign({}, state, { data: 'hoge' })
      console.log(nextState)
      return nextState
    }
  },
  initialState.sample
)

export default combineReducers({
  sample
})
