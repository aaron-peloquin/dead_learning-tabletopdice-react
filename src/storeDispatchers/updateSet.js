import store from '../store'

const updateSet = ({id, key, newValue}) => {
  store.dispatch({
    type: "sets:update",
    payload: {
      "id": id,
      "key": key,
      "value": newValue 
    }
  })
}
export default updateSet