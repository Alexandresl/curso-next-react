export default function lista2() {
  return (
    <div>
      {geraSpan(10)}
    </div>
  );
}

function geraSpan(qtd: number) {

  let conteudo = "";

  for (let i = 0; i <= qtd; i++) {
    conteudo += <span>{i}</span>;
  }

  return conteudo
}