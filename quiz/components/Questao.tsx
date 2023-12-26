import questoes from "@/pages/api/bancoDeQuestoes";
import QuestaoModel from "../model/Questao";

import styles from '../src/styles/Questao.module.css'
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";

const letras = [
	{valor: "A", cor: "#f2c866"},
	{valor: "B", cor: "#f266ba"},
	{valor: "C", cor: "#85d4f2"},
	{valor: "D", cor: "#bce596"}
]

interface QuestaoProps {
	valor: QuestaoModel,
	respostaFornecida: (indice: number) => void
}

export default function Questao(props: QuestaoProps) {

	const questao = props.valor;

	function renderizarRespostas() {
		return questao.respostas.map((resposta, indice) => {
			return <Resposta
				key={indice}
				valor={resposta}
				indice={indice}
				letra={letras[indice].valor}
				corBox={letras[indice].cor}
				respostaFornecida={props.respostaFornecida}
			/>
		});
	}

	return (
		<div className={styles.questao}>
			<Enunciado texto={questao.enunciado} />
			{renderizarRespostas()}
		</div>
	)

}