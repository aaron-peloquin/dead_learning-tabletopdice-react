import store from '../store'

const toggleModal = (key) => {
  store.dispatch({
    type: "modals:toggleModal",
    payload: key
  })
}
export default toggleModal