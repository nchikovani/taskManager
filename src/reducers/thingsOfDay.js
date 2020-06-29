let initial;
try {
  initial = localStorage.getItem("thingsOfDay") ?
  JSON.parse(localStorage.getItem("thingsOfDay")) : [];
} catch(error) {
  console.log(error.message);
  initial = []
}

export default function thingsOfDay(state=initial, action) {
  let newState, targetThing;
  switch (action.type) {
    case ('ADD_THING_OF_DAY'):
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          date: action.date,
          checked: action.checked,
        }
      ];
    case ('CHECK_THING_OF_DAY'):
      newState = state.slice();
      targetThing = newState.find(thing => thing.id === action.id);
      if (targetThing) targetThing.checked = action.checked;
      return newState;
    case ('DELETE_THING_OF_DAY'):
      newState = state.filter(thing => thing.id !== action.id);
      return newState;
    default:
      return state;
  }
}