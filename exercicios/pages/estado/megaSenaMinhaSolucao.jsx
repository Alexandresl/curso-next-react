import styles from "@/pages/estado/megaSenaMinhaSolucao.module.css";
import { useState } from "react";

export default function MegaSenaMinhaSolucao() {
  const [numeros, setNumeros] = useState([]);
	const [qtdNumeros, setQtdNumeros] = useState(0);

	function setInputQtd(e) {
		if (e.target.value >= 0 && e.target.value < 60) setQtdNumeros(e.target.value);
	}

  function gerarJogo() {
    const jogo = [];
		const arrayN = [];

		if (qtdNumeros > 0) {

			for (let i = 0; i < qtdNumeros; i++) {

				let n;

				do {
					n = Math.floor(Math.random() * 60 + 1);
					console.log(n, arrayN.indexOf(n), arrayN.indexOf(n) >= 0);
				} while (n === 0 || arrayN.indexOf(n) >= 0)
				
				arrayN.push(n);
				jogo.push(<span key={i} className={styles.num}>{n}</span>);
			}

		} else {
			alert("Selecione uma quantidade de números maior que 0.");
		}

		setNumeros(jogo);

  }

  return (
    <div className={styles.content}>
      <h1 className={styles.h1}>Gerar números da Mega-Sena</h1>
      <div className={styles.numeros}>
        {/* <span className={styles.num}>01</span> */}
        {numeros}
      </div>
      <div className={styles.form}>
        <span>Quantidade de números:</span>
        <input type="number" value={qtdNumeros} onChange={setInputQtd} />
        <button onClick={gerarJogo}>Gerar números</button>
      </div>
    </div>
  );
}
