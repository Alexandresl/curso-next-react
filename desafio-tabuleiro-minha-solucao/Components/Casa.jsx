import styles from "./Casa.module.css";

export default function Casa(props) {

	const casaColor = ((props.linha + props.coluna) % 2 == 0) ? styles.branca : styles.preta
	const estilosAplicados = [casaColor, styles.casa];

  return (
    <span className={[...estilosAplicados].join(" ")}>
      .
    </span>
  );
}
