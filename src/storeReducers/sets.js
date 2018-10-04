export default function(state='', { type, payload }) {
  if(type === "addSet") {
    state.push(payload)
    
  }
  return state  
}
