/**
 * Reducer for store.setEditStatus
 * @param {array} state An object of each toggle,
 * @param {str} type The type of action to take on this dataset
 * @param {str} paypload The data to update this state with
 */

const defaultState = []

function disableAll(state) {
  let active = state.indexOf(true)
  if(active > -1) {
    state[active] = false
  }
  return state
}

const setEditStatusReducer = (state=defaultState, { type, payload }) => {
  switch (type) {
    default:
      /** Do nothing */
      break
    case "setEditStatus:disableAll":
      state = disableAll(state)
      break
    case "setEditStatus:toggle":
      let currentState = state[payload]
      /** If this set is currently true, set it to false */
      if(currentState) {
        state[payload] = false
      }
      else {
        /** Attempt to find an active set */
        state = disableAll(state)
        /** Set this set to be true */
        state[payload] = true
      }
      break
  }
  return state  
}

export default setEditStatusReducer