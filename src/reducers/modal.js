const initial = {
	isOpen: false, 
	Child: null,
}

function modal(state=initial, action) {
  switch (action.type) {
    case 'openModal':
      return {
      	isOpen: true,
      	Child: action.Child,
      };
    case 'closeModal':
      return {
      	isOpen: false,
      	Child: null,
      };
    default:
      return state;
  }
}

export default modal;