const generateId = () => Math.random().toString(36).substr(2, 9);

export function openModal(child) {
  return {
    type: 'OPEN_MODAL',
    child,
  }
}
export function closeModal() {
  return {
    type: 'CLOSE_MODAL',
  }
}
export function addThing(text) {
  return {
    type: 'ADD_THING',
    id: generateId(),
    text,
  }
}
export function addPoint(thingId, text) {
  return {
    type: 'ADD_POINT',
    id: generateId(),
    text,
    thingId,
  }
}
export function addThingOfDay(text, date) {
  return {
    type: 'ADD_THING_OF_DAY',
    id: generateId(),
    text,
    date,
  }
}