export default function Calculator() {

	function handleNumber(){
		// console.log("hello");
	}
	return (
		<div style={{ display: "grid", gridTemplateColumns: "repeat(3, 40px)" }}>
			{[...Array(10).keys()].map((e, i) => <button key={i} onClick={handleNumber}> {e} </button>)}
		</div>
	);
}