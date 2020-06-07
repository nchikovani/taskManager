

export function openModal(Child) {

  return {
    type: 'openModal',
    Child,
  }
}
export function closeModal() {

  return {
    type: 'closeModal',
  }
}