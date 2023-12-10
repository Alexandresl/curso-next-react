export async function getStaticPaths() {
  const resp = await fetch(`http://localhost:3000/api/alunos/tutores`);
  const ids = await resp.json();

  const paths = ids.map((id) => {
    return { params: { id: `${id}` } };
  });

  return {
    fallback: true, // falso = 404
    paths,
  };
}

export async function getStaticProps(context) {
  const resp = await fetch(
    `http://localhost:3000/api/alunos/${context.params.id}`
  );
  const aluno = await resp.json();

  return {
    props: {
      aluno,
    },
  };
}

export default function AlunosPorId(props) {
  const { aluno } = props;

  return (
    <div>
      <h1>Detalhes do Aluno</h1>

      {aluno ? (
        <ul>
          <li>{props.aluno.id}</li>
          <li>{props.aluno.nome}</li>
          <li>{props.aluno.email}</li>
        </ul>
      ) : (
        false
      )}
    </div>
  );
}
