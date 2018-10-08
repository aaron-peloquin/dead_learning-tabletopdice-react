import store from '../store'

const toggleSetEditStatus = (key) => {
  console.log("Sent key", key)
  store.dispatch({
    type: "setEditStatus:toggle",
    payload: key
  })
}
export default toggleSetEditStatus