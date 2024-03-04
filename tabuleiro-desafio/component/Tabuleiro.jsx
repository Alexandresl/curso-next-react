import Linha from "./Linha";
import styles from '../styles/Tabuleiro.module.css'

export default function Tabuleiro() {
	return (
		<div className={styles.tabuleiro}>
			<Linha primeira="preta" />
			<Linha primeira="branca" />
			<Linha primeira="preta" />
			<Linha primeira="branca" />
			<Linha primeira="preta" />
			<Linha primeira="branca" />
			<Linha primeira="preta" />
			<Linha primeira="branca" />
		</div>
	);
}