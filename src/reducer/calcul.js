import { ADD, DIVIDE, EQUAL, MULTIPLY, SUBTRACT } from "../constants/actions";

const stateInit = {
	display: 0,
	operations: [
		{ type: ADD, display: '+' },
		{ type: SUBTRACT, display: '-' },
		{ type: MULTIPLY, display: 'x' },
		{ type: DIVIDE, display: '/' },
	],
	numbers: [...Array(10).keys()]
};


const reducer = (state = stateInit, action = {}) => {
	switch (action.type) {
		case ADD:
			return state;
		case SUBTRACT:
			return state;
		case MULTIPLY:
			return state;
		case DIVIDE:
			return state;
		case EQUAL:
			return state;
		default:
			return state;
	}
};
export default reducer;