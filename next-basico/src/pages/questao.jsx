import { useEffect, useState } from "react";

export default function questao () {

	const [questao, setQuestao] = useState(null)

	useEffect(() => {
		fetch("http://localhost:3001/api/questao/1")
		.then(resp => resp.json())
		.then(setQuestao);
	}, []);

	function renderizarRespostas() {

		if (questao) {
			return  questao.respostas.map((resp, index) => {
				return <li key={index}>{resp}</li>
			});
		}

		return false;

	}

	return (
		<div>
			<h1>Questão</h1>
			<div>
				<span>{questao?.id} - {questao?.enunciado}</span>
				<ul>
					{renderizarRespostas()}
				</ul>
			</div>
		</div>
	);
}