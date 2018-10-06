import {
  saveToStorage,
  loadFromStorage,
} from './helper-localStorage'
import {
  update_settings
} from './../storeDispatchers/updateSettings'

const defaultState = {
  "showStandardArray": true,
  "showStandardDie4": true,
  "showStandardDie6": true,
  "showStandardDie8": true,
  "showStandardDie10": true,
  "showStandardDie12": true,
  "showStandardDie20": true,
}

export default function(state=defaultState, { type, payload }) {
  let updateLocalStorage = false
  const settingsStorage = loadFromStorage('settings')
  if(settingsStorage) {
    state = settingsStorage
  }

  if(type === update_settings) {
    updateLocalStorage = true
    state[payload.key] = payload.value
  }

  if(updateLocalStorage){
    saveToStorage('settings', state)
  }
  return state  
}
