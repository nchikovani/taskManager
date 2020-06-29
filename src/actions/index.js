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
export function deleteThing(id) {
  return {
    type: 'DELETE_THING',
    id,
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
export function deletePoint(id) {
  return {
    type: 'DELETE_POINTS',
    id,
  }
}
export function addThingOfDay(text, date) {
  return {
    type: 'ADD_THING_OF_DAY',
    id: generateId(),
    text,
    date,
    checked: false,
  }
}
export function checkThingOfDay(id, value) {
  return {
    type: 'CHECK_THING_OF_DAY',
    id,
    checked: value,
  }
}
export function deleteThingOfDay(id) {
  return {
    type: 'DELETE_THING_OF_DAY',
    id,
  }
}