let initial;
try {
  initial = localStorage.getItem("points") ?
  JSON.parse(localStorage.getItem("points")) : [];
} catch(error) {
  console.log(error.message);
  initial = []
}


export default function points(state=initial, action) {
  switch (action.type) {
    case ('ADD_POINT'):
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          thingId: action.thingId,
        }
      ];
    case ('DELETE_POINT'):
      const newState = state.filter(point => point.id !== action.id);
      return newState;
    default:
      return state;
  }
}