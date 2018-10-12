/**
 * Reducer for store.toggles
 * @param {array} state An object of each toggle,
 * @param {str} type The type of action to take on this dataset
 * @param {str} payload The data to update this state with
 */

const defaultState = {}

const toggleReducer = (state=defaultState, { type, payload }) => {
  switch (type) {
    default:
      /** Do nothing */
      break
    case "toggles:update":
      state[payload] = !state[payload]
      break
  }
  return state  
}

export default toggleReducer