export default function lista1 () {
	return (
		<div>
			{gerarLista()}
		</div>
	);
}

function gerarLista(qtd = 10) {
	let lista = [];

	for (let i = 0; i < qtd; i++) {
		lista.push(<span>{i + 1}{i + 1 < 10 ? ", " : ""}</span>);
	}

	return lista

}