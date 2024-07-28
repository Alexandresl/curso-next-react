import { useState } from "react";
import styles from "./contadorDesafio.module.css";

export default function contadorDesafio() {

    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(contador + 1)
    }

    function decrementar() {
        setContador(contador - 1)
    }

    return (
        <div className={styles.container}>
            <h1>Contador</h1>
            <span>Valor: {contador}</span>
            <div className={styles.buttons}>
                <button onClick={decrementar}>-</button>
                <button onClick={incrementar}>+</button>
            </div>
        </div>
    );
}
