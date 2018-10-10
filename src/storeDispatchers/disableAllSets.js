import store from '../store'

const disableAllSets = (key) => {
  store.dispatch({
    type: "setEditStatus:disableAll",
    payload: true,
  })
}

export default disableAllSets