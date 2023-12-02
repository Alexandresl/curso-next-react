import ContadorDisplay from "@/components/indireta1/ContadorDisplay";
import { useState } from "react";

export default function contador() {
  const [numero, setNumero] = useState(0);

  const incrementar = () => setNumero(numero + 1);
  const decrementar = () => setNumero(numero - 1);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1>Contador</h1>
      <ContadorDisplay numero={numero} />
      <div>
        <button
          onClick={decrementar}
          style={{
            width: "50px",
            height: "30px",
          }}
        >
          -
        </button>
        <button
          onClick={incrementar}
          style={{
            width: "50px",
            height: "30px",
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
