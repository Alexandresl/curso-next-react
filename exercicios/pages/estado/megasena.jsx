import { useState } from "react";
import { mega } from "../../functions/mega";
import NumeroDisplay from "@/components/NumeroDisplay";

export default function megasena() {
    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState(mega(qtde));

    function renderNumeros() {
        return numeros.map((numero) => (
            <NumeroDisplay key={numero} numero={numero} />
        ));
    }

    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h1>Mega Sena</h1>
            <div style={{display: "flex", flexWrap: "wrap", maxWidth: "50%", justifyContent: "center"}}>{renderNumeros()}</div>
            <div>
                <input type="number" min={6} max={60} value={qtde} onChange={(event) => setQtde(event.target.value)} />
                <button onClick={() => setNumeros(mega(qtde))}>
                    Gerar Apostas
                </button>
            </div>
        </div>
    );
}
