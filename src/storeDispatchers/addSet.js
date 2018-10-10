import store from '../store'
import toggleSetEditStatus from './toggleSetEditStatus'

const toggleModal = (key) => {
  store.dispatch({
    type: "sets:addSet",
    payload: true,
  })
  const id = store.getState().sets.length - 1
  toggleSetEditStatus(id)
}

export default toggleModal