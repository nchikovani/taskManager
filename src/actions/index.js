

export function openModal(child) {

  return {
    type: 'openModal',
    child,
  }
}
export function closeModal() {

  return {
    type: 'closeModal',
  }
}