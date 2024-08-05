import { useRouter } from "next/router";

export default function buscar() {
    const router = useRouter();

    const id = router.query.id;

    console.log(id, "Olá id");

    return (
        <div>
            <h1>Rotas / {id} / buscar</h1>
        </div>
    );
}
