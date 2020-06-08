const initial = {
	isOpen: false, 
	child: null,
}

function modal(state=initial, action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
      	isOpen: true,
      	child: action.child,
      };
    case 'CLOSE_MODAL':
      return {
      	isOpen: false,
      	child: null,
      };
    default:
      return state;
  }
}

export default modal;