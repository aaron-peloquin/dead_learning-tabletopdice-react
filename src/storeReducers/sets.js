import {
  saveToStorage,
  loadFromStorage
} from './helper-localStorage'

const defaultState = [
  {
    name:"Short Sword",
    note: "A martial melee weapon that weighs 2 lbs and costs 10 gold.",
    primary: "1d20+5",
    secondary: "1d6+3",
  }
]

/**
 * Reducer for {}.sets
 * Attempts to pull state out of localStorage
 * @param {array} state An array of objects
 * @param {str} type The type of action to take on this dataset
 * @param {str} paypload The data to update this state with
 */
export default function(state=defaultState, { type, payload }) {
  let updateLocalStorage = false
  const storageSets = loadFromStorage('sets')

  if(storageSets.length>0) {
    state = storageSets
  }

  switch (type) {
    default:
      /** Do nothing */
      break
    case "sets:addSet":
      updateLocalStorage = true
      state.push(payload)
      break
    case "sets:update":
      updateLocalStorage = true
      state[payload.id][payload.key] = payload.value
      break
  }

  /** Attempt to pass new state to localStorage as a JSON object */
  if(updateLocalStorage){
    saveToStorage('sets', state)
  }
  return state  
}
