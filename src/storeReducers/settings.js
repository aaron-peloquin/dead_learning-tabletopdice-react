import { saveToStorage } from './localStorage'

export default function(state='', { type, payload }) {
  if(type === "updateSettings") {
    state = payload
  }
  saveToStorage('settings', state)
  return state  
}
