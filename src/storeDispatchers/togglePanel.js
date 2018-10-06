export const toggle_modal = 'modals:toggleModal'

export function toggleModal(key) {
  return {
    type: toggle_modal,
    payload: key
  }
}