/**
 * Reducer for {}.modals
 * @param {array} state An object of each modal,
 *  each with a default boolean value of false
 * @param {str} type The type of action to take on this dataset
 * @param {str} paypload The data to update this state with
 */

const defaultState = {
  addSet: false
}

const modalReducer = (state=defaultState, { type, payload }) => {
  switch (type) {
    default:
      /** Do nothing */
      break
    case "modals:toggleModal":
      state[payload] = !state[payload]
      break
  }
  return state  
}

export default modalReducer