/**
 * Reducer for store.setEditStatus
 * @param {array} state An object of each toggle,
 * @param {str} type The type of action to take on this dataset
 * @param {str} paypload The data to update this state with
 */

const defaultState = []

const setEditStatusReducer = (state=defaultState, { type, payload }) => {
  switch (type) {
    default:
      /** Do nothing */
      break
    case "setEditStatus:toggle":
      let currentState = state[payload]
      /** If this set is currently true, set it to false */
      if(currentState) {
        state[payload] = !state[payload]
      }
      else {
        /** Attempt to find an active set */
        let activeEdit = state.indexOf(true)
        if(activeEdit>-1) {
          /** If we have an active set, deactivate it */
          state[activeEdit] = false
        }
        /** Toggle this set to be true */
        state[payload] = true
      }
      break
  }
  return state  
}

export default setEditStatusReducer