import { combineReducers, createStore } from 'redux'
import {
  panelsReducer,
  setsReducer
} from './storeReducers/'

const reducers = combineReducers({
  "modals": panelsReducer,
  "sets": setsReducer
})

const reduxDevTools = window.devToolsExtension && window.devToolsExtension()
const store = createStore(reducers, {}, reduxDevTools)

export default store