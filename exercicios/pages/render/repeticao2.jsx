import listaProdutos from "../../data/listaProdutos";

export default function repeticao2() {
  function renderizarLinhas() {

    const classTd = {
        padding: "5px"
    }

    return listaProdutos.map((produto, index) => {
      return (
        <tr key={produto.id}>
          <td style={classTd}>{produto.id}</td>
          <td style={classTd}>{produto.nome}</td>
          <td style={classTd}>{produto.preco}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <table border="1" style={{
        margin: "5px"
      }}>
        <thead>
          <tr>
            <th style={{padding: "5px"}}>Código</th>
            <th style={{padding: "5px"}}>Nome</th>
            <th style={{padding: "5px"}}>Preço</th>
          </tr>
        </thead>
        <tbody>{renderizarLinhas()}</tbody>
      </table>
    </div>
  );
}
