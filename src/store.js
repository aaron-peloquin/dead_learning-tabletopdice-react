import {
  combineReducers,
  createStore,
} from 'redux'
import {
  setsReducer,
  togglesReducer,
  rollsReducer,
  setEditStatusReducer,
} from './storeReducers/'

const reducers = combineReducers({
  "toggles": togglesReducer,
  "sets": setsReducer,
  "rolls": rollsReducer,
  "setEditStatus": setEditStatusReducer,
})

/** Enable chrome extension to view redux data */
const reduxDevTools = window.devToolsExtension && window.devToolsExtension()

/** Create our store with no default data */
const store = createStore(reducers, {}, reduxDevTools)

export default store