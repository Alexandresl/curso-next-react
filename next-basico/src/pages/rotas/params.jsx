import { useRouter } from "next/router";

export default function params() {

	const router = useRouter();

	const nome = router.query.nome
	const id = router.query.id

	console.log(nome, id);

  return (
    <div>
      <h1>Rotas Params | Código {id} - Nome {nome}</h1>
    </div>
  );
}
