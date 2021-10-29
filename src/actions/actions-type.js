import { ADD, DIVIDE, EQUAL, MULTIPLY, SUBTRACT } from "../constants/actions";

export const addition = content => ({
	type: ADD,
	payload: {
		operation: "operator"
	}
});

export const subtraction = content => ({
	type: SUBTRACT,
	payload: {
		operation: "operator"
	}
});

export const multiplication = content => ({
	type: MULTIPLY,
	payload: {
		operation: "operator"
	}
});

export const division = content => ({
	type: DIVIDE,
	payload: {
		operation: "operator"
	}
});

export const equal = content => ({
	type: EQUAL,
	payload: {
		operation: "equal"
	}
});