import Casa from "@/Components/Casa";

export default function Home() {
 
	return (
		<div className="tabuleiro">
			{gerarTabuleiro()}
		</div>
	);
}

function gerarTabuleiro(linha = 8, coluna = 8) {
	const tabuleiro = []
	for (let i = 0; i < linha; i++) {
		for (let j = 0; j < coluna; j++) {
			tabuleiro.push(<Casa linha={i} coluna={j} />)
		}
		tabuleiro.push(<br />)
	}
	return tabuleiro
}