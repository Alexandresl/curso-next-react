import Casa from "./Casa";
import styles from "../styles/Linha.module.css";

export default function Linha(props) {
  return (
    props.branca ? (
      <div className={styles.linha}>
      <Casa />
      <Casa color />
      <Casa />
      <Casa color />
      <Casa />
      <Casa color />
      <Casa />
      <Casa color />
    </div>
    ) : (
      <div className={styles.linha}>
      <Casa color />
      <Casa />
      <Casa color />
      <Casa />
      <Casa color />
      <Casa />
      <Casa color />
      <Casa />
    </div>
    )
  );
}
