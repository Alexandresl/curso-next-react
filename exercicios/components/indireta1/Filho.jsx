export default function Filho (props) {

	// Passei no ENEM!

	return (
		<div>
			<h1>Filho</h1>
			<button onClick={props.funcao}>Falar com o pai</button><br />
			<button onClick={() => props.funcao("Passei no Enem!")}>Falar com o pai</button>
		</div>
	);
}