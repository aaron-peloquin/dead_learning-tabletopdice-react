import store from '../store'

const updateSet = ({id, data}) => {
  store.dispatch({
    type: "sets:update",
    payload: {
      "id": id,
      "data": data,
    }
  })
}
export default updateSet

