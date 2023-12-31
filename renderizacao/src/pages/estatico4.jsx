export async function getStaticProps() {
  console.log("[Server] Gerando props para o componente...");
  const resp = await fetch("http://localhost:3000/api/produtos");
  const produtos = await resp.json();
  return {
    props: {
      produtos,
    },
  };
}

export default function Estatico4(props) {
  console.log("[Cliente] Renderizando o componente");

  function renderizarProtudos() {
    return props.produtos.map((produto) => {
      return (
        <li key={produto.id}>
          {produto.id} - {produto.nome} tem preco de R$ {produto.preco}
        </li>
      );
    });
  }

  return (
    <div>
      <h1>Estatico 04</h1>
      <ul>{renderizarProtudos()}</ul>
    </div>
  );
}
