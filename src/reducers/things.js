const initial = [];

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
    // case action.type = 'DELETE_THING':
    //   return state;
    default:
      return state;
  }
}