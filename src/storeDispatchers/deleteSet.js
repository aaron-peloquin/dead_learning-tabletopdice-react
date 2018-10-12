import store from '../store'
import disableAllSets from './../storeDispatchers/disableAllSets'

const addSet = (key) => {
  store.dispatch({
    type: "sets:deleteSet",
    payload: key,
  })
  const id = store.getState().sets.length - 1
  disableAllSets(id)
}

export default addSet