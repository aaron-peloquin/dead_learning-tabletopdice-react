export const toggle_modal = 'modals:toggleModal'

export function toggleModal(key) {
  console.log("Sending Payload of.. ",key)
  return {
    type: toggle_modal,
    payload: key
  }
}