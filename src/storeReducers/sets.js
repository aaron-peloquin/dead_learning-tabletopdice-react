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
 * @param {str} payload The data to update this state with
 */
export default function(state=defaultState, { type, payload }) {
  let updateLocalStorage = false
  const storageSets = loadFromStorage('sets')

  if(storageSets.length>0) {
    state = storageSets
  }
  else {
    /** Initilize localStorage with the defaultState */
    updateLocalStorage = true
  }

  switch (type) {
    default:
      /** Do nothing */
      break
    case "sets:addSet":
      updateLocalStorage = true
      state.push({
        name: "",
        note: "",
        primary: "",
        secondary: "",
      })
      break
    case "sets:deleteSet":
      updateLocalStorage = true
      state.splice(payload,1)
      break
    case "sets:update":
      updateLocalStorage = true
      console.log("state 1-0",state[0])
      console.log("state 1-1",state[1])
      console.log("Updating..",payload)
      state[payload.id] = payload.data
      console.log("state 2-0",state[0])
      console.log("state 2-1",state[1])
      break
  }

  /** Attempt to pass new state to localStorage as a JSON object */
  if(updateLocalStorage){
    saveToStorage('sets', state)
  }
  return state  
}
