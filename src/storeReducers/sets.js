import {
  saveToStorage,
  loadFromStorage
} from './helper-localStorage'

/**
 * Reducer for {}.sets
 * Attempts to pull state out of localStorage
 * @param {array} state An array of objects
 * @param {str} type The type of action to take on this dataset
 * @param {str} paypload The data to update this state with
 */
export default function(state=[], { type, payload }) {
  let updateLocalStorage = false

  const storageSets = loadFromStorage('sets')
  if(storageSets) {
    state = storageSets
  }

  switch (type) {
    case "addSet":
      updateLocalStorage = true
      state.push(payload)
      break;
  }

  /** Attempt to pass new state to localStorage as a JSON object */
  if(updateLocalStorage){
    saveToStorage('sets', state)
  }
  return state  
}
