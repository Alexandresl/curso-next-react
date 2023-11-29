import { useState } from "react";

export default function (props) {

	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	function quandoMover(event) {
		setX(event.clientX);
		setY(event.clientY)
	}

  return (
    <div
      style={{
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
				flexDirection: "column"
      }}
			onMouseMove={quandoMover}
    >
      <div>Eixo X: {x}</div>
      <div>Eixo Y: {y}</div>
    </div>
  );
}
