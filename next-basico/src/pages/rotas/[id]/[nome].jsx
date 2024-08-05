import { useRouter } from "next/router";

export default function nome() {
    const router = useRouter();

    const id = router.query.id;
    const nome = router.query.nome;

    console.log(id, "Olá id");

    return (
        <div>
            <h1>Rotas / {id} / {nome}</h1>
        </div>
    );
}
