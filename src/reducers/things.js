let initial;
try {
  initial = localStorage.getItem("things") ?
  JSON.parse(localStorage.getItem("things")) : [];
} catch(error) {
  console.log(error.message);
  initial = []
}

export default function things(state=initial, action) {
  switch (action.type) {
    case ('ADD_THING'):
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ];
    case ('DELETE_THING'):
      const newState = state.filter(thing => thing.id !== action.id);
      return newState;
    default:
      return state;
  }
}