import {
  combineReducers,
  createStore,
} from 'redux'
import {
  setsReducer,
  modalsReducer,
  rollsReducer,
} from './storeReducers/'

const reducers = combineReducers({
  "modals": modalsReducer,
  "sets": setsReducer,
  "rolls": rollsReducer,
})

/** Enable chrome extension to view redux data */
const reduxDevTools = window.devToolsExtension && window.devToolsExtension()

/** Create our store with no default data */
const store = createStore(reducers, {}, reduxDevTools)

export default store