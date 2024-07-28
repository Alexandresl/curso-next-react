import { useState } from "react";
import styles from "./contadorDesafio.module.css";
import ContadorDisplay from "../../components/ContadorDisplay"

export default function contador() {

    const [numero, setNumero] = useState(0)

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

    return (
        <div className={styles.container}>
            <h1>Contador</h1>
            <ContadorDisplay numero={numero} />
            <div className={styles.buttons}>
                <button onClick={dec} onclic>-</button>
                <button onClick={inc}>+</button>
            </div>
        </div>
    );
}
