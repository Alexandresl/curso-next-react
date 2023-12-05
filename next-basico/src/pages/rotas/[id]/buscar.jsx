import { useRouter } from "next/router";
import Link from "next/link";

export default function buscar() {
  const router = useRouter();

  const id = router.query.id;

  return (
    <div className="page">
      <h1>Rotas / {id} / Buscar</h1>
      <Link href={"/rotas"}>
        <a>
          <button>Voltar</button>
        </a>
      </Link>
    </div>
  );
}
