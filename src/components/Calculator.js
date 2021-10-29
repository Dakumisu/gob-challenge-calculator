import { useDispatch, useSelector } from "react-redux";
import { addition, division, multiplication, subtraction, updateDisplay } from "../actions/actions-type";
import { ADD, DIVIDE, MULTIPLY, SUBTRACT } from "../constants/actions";


export default function Calculator() {
	const dispatch = useDispatch();
	const { operations, numbers, display } = useSelector((state) => state);

	function handleNumber(e) {
		dispatch(updateDisplay(e.target.innerText))
	}

	function handleOperation(type) {
		switch (type) {
			case ADD:
				dispatch(addition());
				break;
			case SUBTRACT:
				dispatch(subtraction());
				break;
			case MULTIPLY:
				dispatch(multiplication());
				break;
			case DIVIDE:
				dispatch(division());
				break;
			default:
				break;
		}
	}

	return (
		<div>
			<div> {display} </div>
			<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 40px)" }}>
				{numbers.map((nb, i) => <button key={i} onClick={handleNumber}> {nb} </button>)}
			</div>
			<div>
				{operations.map((op, i) => <button key={i} onClick={() => handleOperation(op.type)}> {op.display} </button>)}
			</div>
		</div>
	);
}