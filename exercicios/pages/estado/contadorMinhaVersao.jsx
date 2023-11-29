import styles from "@/pages/estado/contadorMinhaVersao.module.css"
import { useState } from "react";

export default function contador () {

	const [contador, setContador] = useState(0)

	function incrementar() {
		setContador(contador + 1)
	}

	function decrementar() {
		setContador(contador - 1)
	}

	return (
		<div className={styles.container}>
			<h1 className={styles.h1}>Contador</h1>
			<div className={styles.valor}>Valor: <span>{contador}</span></div>
			<button className={styles.btn} onClick={incrementar}>Incrementar (+)</button>
			<button className={styles.btn} onClick={decrementar}>Decrementar (-)</button>
		</div>
	);
}