import { saveToStorage } from './localStorage'


export default function(state=[], { type, payload }) {
  if(type === "addSet") {
    state.push(payload)
    saveToStorage('sets', state)
  }
  return state  
}
