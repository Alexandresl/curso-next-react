function acao1() {
  console.log("Ação1");
}

export default function botao() {
  function acao2() {
    console.log("Ação2");
  }

	function acao5 (e) {
		console.log(e);
	}

  return (
    <div>
      <button onClick={acao1}>Click #01</button><br />
      <button onClick={acao2}>Click #02</button><br />
      <button
        onClick={function () {
          console.log("Ação 3");
        }}
      >
        Click #02
      </button><br />
      <button
        onClick={() => {
          console.log("Ação 4");
        }}
      >
        Click #04
      </button><br />
			<button onClick={acao5}>Click #05</button><br />
			<button onClick={e => acao5(e.altKey)}>Click #06</button><br />
			<input type="text" onChange={(e) => console.log(e.target.value)} /><br />
    </div>
  );
}
