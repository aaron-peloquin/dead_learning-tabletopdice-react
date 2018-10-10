/**
 * Reducer for {}.rolls
 * @param {array} state An object of each modal,
 *  each with a default boolean value of false
 * @param {str} type The type of action to take on this dataset
 * @param {str} payload The data to update this state with
 */

const defaultState = [
  {sides: 20, result: 14},
  {sides: 6, result: 6},
  {sides: 4, result: 4},
  {sides: 4, result: 2},
  {sides: 6, result: 4},
]

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