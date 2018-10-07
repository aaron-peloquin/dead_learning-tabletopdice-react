/**
 * Reducer for {}.rolls
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
    case "rolls:addRoll":
      const {sides="unknown", result=0} = payload
      state.push({"sides":sides,"result":result})
    break
  }
  return state  
}

export default modalReducer