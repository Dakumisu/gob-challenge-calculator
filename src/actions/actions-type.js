import { ADD, DIVIDE, MULTIPLY, SUBTRACT, UPDATE, CLEAR, EQUAL } from "../constants/actions";

export const addition = () => ({ type: ADD });
export const subtraction = () => ({ type: SUBTRACT });
export const multiplication = () => ({ type: MULTIPLY });
export const division = () => ({ type: DIVIDE });
export const updateDisplay = payload => ({ type: UPDATE, payload });
export const clearDisplay = () => ({ type: CLEAR });
export const displayResult = () => ({ type: EQUAL });