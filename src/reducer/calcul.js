import { ADD, DIVIDE, EQUAL, MULTIPLY, CLEAR, SUBTRACT, UPDATE } from "../constants/actions";

const stateInit = {
	display: '',
	accumulated: 0,
	operations: [
		{ type: ADD, display: '+' },
		{ type: SUBTRACT, display: '-' },
		{ type: MULTIPLY, display: 'x' },
		{ type: DIVIDE, display: '/' },
	],
	numbers: [...Array(10).keys()]
};

const reducer = (state = stateInit, action = {}) => {
	const { type } = action;
	if (type === UPDATE) {
		const input = action.payload;
		const display = state.display + input;
		return { ...state, display };
	}
	else if (type === CLEAR) {
		return { ...state, display: '0' };
	}
	else if (type === ADD) {
		return state;
	}
	else if (type === SUBTRACT) {
		return state;
	}
	else if (type === MULTIPLY) {
		return state;
	}
	else if (type === DIVIDE) {
		return state;
	}
	else if (type === EQUAL) {
		return state;
	}
	else return state;
};
export default reducer;