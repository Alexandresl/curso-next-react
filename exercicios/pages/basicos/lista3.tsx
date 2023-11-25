export default function lista3 () {

	return (
		<div>
			{gerarLista(10)}
		</div>
	);

}

function gerarLista(qtd: number) {
	const lista = [];
	for (let i = 1; i <= qtd; i++) {
		lista.push(<span>{i}, </span>);
	}

	return lista;
}