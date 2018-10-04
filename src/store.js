import { combineReducers, createStore } from 'redux'
import settingsReducer from './storeReducers/settings'
import setsReducer from './storeReducers/sets'
import { loadFromStorage } from './storeReducers/localStorage'

const reducers = combineReducers({
  "settings": settingsReducer,
  "sets": setsReducer
})

let startingData = {
  "settings": {
    "showStandardArray": true,
    "showStandardDie": {
      "4": true,
      "6": true,
      "8": true,
      "10": true,
      "12": true,
      "20": true,
    },
  },
  "sets": []
}

const loadedSets = loadFromStorage('sets')
if(loadedSets) {
  startingData.sets = loadedSets
}

const reduxDevTools = window.devToolsExtension && window.devToolsExtension()
const store = createStore(reducers, startingData, reduxDevTools)


export default store