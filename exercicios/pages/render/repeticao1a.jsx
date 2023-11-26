export default function repeticao1() {
  const listaAprovados = [
    "João",
    "Maria",
    "Ana",
    "Bia",
    "Carlos",
    "Daniel",
    "Laura",
  ];

  
  function renderizarLista() {
    return listaAprovados.map((nome, index) => {
      return <li key={index}>{nome}</li>;
    });
  }

  return <ul>{renderizarLista()}</ul>;
}
