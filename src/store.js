import { combineReducers, createStore } from 'redux'
import {
  modalsReducer,
  settingsReducer,
  setsReducer
} from './storeReducers/'
import { loadFromStorage } from './storeReducers/helper-localStorage'


const reducers = combineReducers({
  "modals": modalsReducer,
  "settings": settingsReducer,
  "sets": setsReducer
})

const reduxDevTools = window.devToolsExtension && window.devToolsExtension()
const store = createStore(reducers, {}, reduxDevTools)

export default store