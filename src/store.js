import { combineReducers, createStore } from 'redux'
import { setsReducer } from './storeReducers/'

const reducers = combineReducers({
  "sets": setsReducer,
})

/** Enable chrome extension to view redux data */
const reduxDevTools = window.devToolsExtension && window.devToolsExtension()

/** Create our store with no default data */
const store = createStore(reducers, {}, reduxDevTools)

export default store