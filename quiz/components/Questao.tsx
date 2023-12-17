import questoes from "@/pages/api/bancoDeQuestoes";
import QuestaoModel from "../model/Questao";

import styles from '../src/styles/Questao.module.css'
import Enunciado from "./Enunciado";
import Resposta from "./Resposta";

interface QuestaoProps {
	valor: QuestaoModel
}

export default function Questao(props: QuestaoProps) {

	const questao = props.valor;

	function renderizarRespostas() {
		return questao.respostas.map((resposta, indice) => {
			return <Resposta
				valor={resposta}
				indice={indice}
				letra="A"
				corLetra="#f2c866"
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