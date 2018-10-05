import {
  toggle_modal
} from './../storeActions/toggleModal'

/**
 * Reducer for {}.modals
 * @param {array} state An object of each modal,
 *  each with a default boolean value of false
 * @param {str} type The type of action to take on this dataset
 * @param {str} paypload The data to update this state with
 */

const defaultState = {
  settings: false,
  addSet: false
}

export default function(state=defaultState, { type, payload }) {
  switch (type) {
    case toggle_modal:
      state[payload] = !state[payload]
      break;
  }
  return state  
}
