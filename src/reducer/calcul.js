import { ADD, DIVIDE, EQUAL, MULTIPLY, CLEAR, SUBTRACT, UPDATE } from "../constants/actions";

const stateInit = {
	display: '',
	// accumulated: 0,
	operations_queue: [],
	operations: [
		{ type: ADD, display: '+' },
		{ type: SUBTRACT, display: '-' },
		{ type: MULTIPLY, display: 'x' },
		{ type: DIVIDE, display: '/' },
		{ type: EQUAL, display: '=' },
	],
	numbers: [...Array(10).keys()],
};

function operate(operator, nb_a, nb_b) {
	if (operator === '+') {
		return nb_a + nb_b;
	}
	else if (operator === '-') {
		return nb_a - nb_b;
	}
	else if (operator === '*') {
		return nb_a * nb_b;
	}
	else if (operator === '/') {
		return nb_a / nb_b;
	}
}

function addQueue(current, items = []) {
	let queue = [...current, ...items];

	while (queue.length >= 3) {
		const result = operate(queue[1], queue[0], queue[2]);
		queue.shift();
		queue.shift();
		queue.shift();
		queue.unshift(result);
	}
	return queue;
}


export default function reducer(state = stateInit, action = {}) {
	const { type } = action;
	if (type === UPDATE) {
		const input = action.payload;
		const display = state.display + input;
		return { ...state, display };
	}
	else if (type === CLEAR) {
		return { ...state, display: '' };
	}
	else if (type === ADD) {
		const operations_queue = addQueue(state.operations_queue, [parseInt(state.display), '+']);
		return { ...state, operations_queue };
	}
	else if (type === SUBTRACT) {
		const operations_queue = addQueue(state.operations_queue, [parseInt(state.display), '-']);
		return { ...state, operations_queue };
	}
	else if (type === MULTIPLY) {
		const operations_queue = addQueue(state.operations_queue, [parseInt(state.display), '*']);
		return { ...state, operations_queue };
	}
	else if (type === DIVIDE) {
		const operations_queue = addQueue(state.operations_queue, [parseInt(state.display), '/']);
		return { ...state, operations_queue };
	}
	else if (type === EQUAL) {
		let operations_queue = addQueue(state.operations_queue, [parseInt(state.display)]);
		const display = operations_queue[0];
		operations_queue = [];
		return { ...state, operations_queue, display };
	}
	else return state;
};