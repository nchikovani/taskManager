let initial;
try {
  initial = localStorage.getItem("thingsOfDay") ?
  JSON.parse(localStorage.getItem("thingsOfDay")) : [];
} catch(error) {
  console.log(error.message);
  initial = []
}

export default function thingsOfDay(state=initial, action) {
  switch (action.type) {
    case ('ADD_THING_OF_DAY'):
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          date: action.date,
        }
      ];
    // case action.type = 'DELETE_THING':
    //   return state;
    default:
      return state;
  }
}