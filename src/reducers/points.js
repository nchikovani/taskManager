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
    // case action.type = 'DELETE_POINT':
    //   return state;
    default:
      return state;
  }
}