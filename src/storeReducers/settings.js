export default function(state='', { type, payload }) {
  if(type === "updateSettings") {
    return payload
  }
  return state  
}
