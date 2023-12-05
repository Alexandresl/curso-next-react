import { useState } from "react";

export default function form() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [usuarios, setUsuarios] = useState([]);

	async function salvarUsuario () {
		await fetch('/api/form', {
			method: 'POST',
			body: JSON.stringify({
				nome, 
				idade
			})
		});

		const resposta = await fetch('/api/form')
		const usuarios = await resposta.json()
		setUsuarios(usuarios)
	}

	function renderizarUsuarios() {
		return usuarios.map((usuario, i) => {
			return <li key={i}>{usuario.nome} tem {usuario.idade} anos</li>
		});
	}

  return (
    <div>
      <h1>Integrando com API 02</h1>
      <div style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "start"
			}}>
        <input
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
					style={{
						marginBottom: "5px"
					}}
        />
        <input
          type="number"
          value={idade}
          onChange={(event) => setIdade(event.target.value)}
					style={{
						marginBottom: "5px"
					}}
        />
				<button onClick={salvarUsuario}>Enviar</button>
      </div>
			<dir>
				<ul>
					{renderizarUsuarios()}
				</ul>
			</dir>
    </div>
  );
}
