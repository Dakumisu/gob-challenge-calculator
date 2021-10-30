import { useDispatch, useSelector } from "react-redux";
import { addition, division, multiplication, subtraction, updateDisplay, clearDisplay, displayResult } from "../actions/actions-type";
import { ADD, DIVIDE, EQUAL, MULTIPLY, SUBTRACT } from "../constants/actions";


export default function Calculator() {
	const dispatch = useDispatch();
	const { operations, numbers, display } = useSelector((state) => state);

	function handleNumber(e) {
		dispatch(updateDisplay(e.target.innerText));
	}

	function handleOperation(type) {
		switch (type) {
			case ADD:
				dispatch(addition());
				dispatch(clearDisplay());
				break;
			case SUBTRACT:
				dispatch(subtraction());
				dispatch(clearDisplay());
				break;
			case MULTIPLY:
				dispatch(multiplication());
				dispatch(clearDisplay());
				break;
			case DIVIDE:
				dispatch(division());
				dispatch(clearDisplay());
				break;
			case EQUAL:
				dispatch(displayResult());
				break;
			default:
				break;
		}
	}

	return (
		<div>
			<p style={{ height: "1em" }}> {display} </p>
			<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 40px)" }}>
				{numbers.map((nb, i) => <button key={i} onClick={handleNumber}> {nb} </button>)}
			</div>
			<div>
				{operations.map((op, i) => <button key={i} onClick={() => handleOperation(op.type)}> {op.display} </button>)}
			</div>
		</div>
	);
}