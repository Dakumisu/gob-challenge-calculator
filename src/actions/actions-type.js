import { ADD, DIVIDE, MULTIPLY, SUBTRACT, UPDATE } from "../constants/actions";

export const addition = () => ({ type: ADD });
export const subtraction = () => ({ type: SUBTRACT });
export const multiplication = () => ({ type: MULTIPLY });
export const division = () => ({ type: DIVIDE });
export const updateDisplay = payload => ({ type: UPDATE, payload });