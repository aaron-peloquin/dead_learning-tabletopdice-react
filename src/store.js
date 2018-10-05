import { combineReducers, createStore } from 'redux'
import {
  modalsReducer,
  settingsReducer,
  setsReducer
} from './storeReducers/'

const reducers = combineReducers({
  "modals": modalsReducer,
  "settings": settingsReducer,
  "sets": setsReducer
})

const reduxDevTools = window.devToolsExtension && window.devToolsExtension()
const store = createStore(reducers, {}, reduxDevTools)

export default store