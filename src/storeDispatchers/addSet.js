import store from '../store'

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
  console.log("id:", id)
}

export default toggleModal