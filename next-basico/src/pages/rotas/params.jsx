import { useRouter } from "next/router";

export default function params() {

    const router = useRouter();

    const nome = router.query.nome;
    const id = router.query.id

    return (
        <div>
            <h1>Params</h1>
            <ul>
                <li>Nome: {nome}</li>
                <li>id: {id}</li>
            </ul>
        </div>
    );
}