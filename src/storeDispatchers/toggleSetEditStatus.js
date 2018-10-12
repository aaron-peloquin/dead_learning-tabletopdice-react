import store from '../store'

const toggleSetEditStatus = (key) => {
  store.dispatch({
    type: "setEditStatus:toggle",
    payload: key
  })
}
export default toggleSetEditStatus