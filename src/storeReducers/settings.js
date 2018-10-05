import {
  saveToStorage,
  loadFromStorage,
} from './helper-localStorage'

const defaultState = {
  "showStandardArray": true,
  "showStandardDie": {
    "4": true,
    "6": true,
    "8": true,
    "10": true,
    "12": true,
    "20": true,
  },
}

export default function(state=defaultState, { type, payload }) {
  let updateLocalStorage = false
  const settingsStorage = loadFromStorage('settings')
  if(settingsStorage) {
    state = settingsStorage
  }

  if(type === "updateSettings") {
    updateLocalStorage = true
    state = payload
  }

  if(updateLocalStorage){
    saveToStorage('settings', state)
  }
  return state  
}
