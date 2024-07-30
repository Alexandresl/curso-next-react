import { useState } from "react";

export default function formulario() {

    const [valor, setValor] = useState(undefined)

    function alterarInput() {
        setValor(valor + "!")
    }

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column"}}>
            <span style={{height: "30px"}}>{valor}</span>
            <input type="text" value={valor} onChange={e => setValor(e.target.value)} />
            <button onClick={alterarInput}>Alterar</button>
        </div>
    );
}