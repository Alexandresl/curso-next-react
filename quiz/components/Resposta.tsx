import RespostaModel from "../model/Resposta";
import styles from "../src/styles/Resposta.module.css"

interface RespostaProps {
	valor: RespostaModel
	indice: number
	letra: string
	corBox: string
}

export default function Resposta (props: RespostaProps) {
	const resposta = props.valor

	return (
		<div className={styles.resposta}>
			<div className={styles.conteudoResposta}>
				<div className={styles.frente}>
					<div className={styles.letra} style={{
						backgroundColor: props.corBox
					}}>
						{props.letra}
					</div>
					<div className={styles.valor}>
						{resposta.valor}
					</div>
				</div>
				<div className={styles.verso}></div>
			</div>
		</div>
	);
}