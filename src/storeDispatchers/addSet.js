import store from '../store'
import toggleSetEditStatus from './toggleSetEditStatus'

const toggleModal = (key) => {
  store.dispatch({
    type: "sets:addSet",
    payload: {
      name: "",
      note: "",
      primary: "",
      secondary: "",
    }
  })
  const id = store.getState().sets.length - 1
  toggleSetEditStatus(id)
}

export default toggleModal