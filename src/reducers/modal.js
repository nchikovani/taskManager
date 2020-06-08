const initial = {
	isOpen: false, 
	child: null,
}

function modal(state=initial, action) {
  switch (action.type) {
    case 'openModal':
      return {
      	isOpen: true,
      	child: action.child,
      };
    case 'closeModal':
      return {
      	isOpen: false,
      	child: null,
      };
    default:
      return state;
  }
}

export default modal;