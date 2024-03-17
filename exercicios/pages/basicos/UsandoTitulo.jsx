import Titulo from "../../components/Titulo";

export default function UsandoTitulo() {
    return (
        <div>
            <Titulo
                principal="Página de cadastro"
                secundario="Incluir, alterar e excluir cadastros!"
            />
            <Titulo
                principal="Página de login"
                secundario="Informe se e-mail e senha!"
                pequeno={true}
            />
            <Titulo
                principal="Página de login"
                secundario="Informe se e-mail e senha!"
                pequeno
            />
        </div>
    );
}