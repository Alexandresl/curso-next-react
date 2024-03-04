import Casa from "./Casa";
import styles from "../styles/Linha.module.css"

export default function Linha(props) {
  if (props.primeira == "preta") {
    return (
      <div className={styles.linha}>
        <Casa color="preta" />
        <Casa color="branca" />
        <Casa color="preta" />
        <Casa color="branca" />
        <Casa color="preta" />
        <Casa color="branca" />
        <Casa color="preta" />
        <Casa color="branca" />
      </div>
    );
  } else {
    return (
      <div className={styles.linha}>
        <Casa color="branca" />
        <Casa color="preta" />
        <Casa color="branca" />
        <Casa color="preta" />
        <Casa color="branca" />
        <Casa color="preta" />
        <Casa color="branca" />
        <Casa color="preta" />
      </div>
    );
  }
}
