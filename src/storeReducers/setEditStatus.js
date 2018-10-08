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
      state[payload] = !state[payload]
      break
  }
  return state  
}

export default setEditStatusReducer