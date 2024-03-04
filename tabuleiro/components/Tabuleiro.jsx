import styles from '../styles/Tabuleiro.module.css'
import Linha from './Linha';

export default function Tabuleiro() {
  return (
    <div className={styles.tabuleiro}>
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
    </div>
  );
}
