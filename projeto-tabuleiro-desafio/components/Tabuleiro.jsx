import Linha from "./Linha";
import styles from '../styles/Tabuleiro.module.css'

export default function Tabuleiro() {
    return (
        <div className={styles.tabuleiro}>
            <Linha branca />
            <Linha />
            <Linha branca />
            <Linha />
            <Linha branca />
            <Linha />
            <Linha branca />
            <Linha />
        </div>
    );
}