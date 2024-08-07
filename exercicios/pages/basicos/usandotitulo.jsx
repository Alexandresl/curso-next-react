import Titulo from "../../components/Titulo";

export default function usandoTitulo() {
  return (
    <>
      <Titulo
        principal="Página de cadastro"
        secundario="Incluir, alterar e excluir cadastros"
      />
      <Titulo
        principal="Página de login"
        secundario="Informe seu usuário e senha"
        pequeno
      />
    </>
  );
}
