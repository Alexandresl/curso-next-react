export default function lista0() {

    function criaLista(qtd) {

        const lista = [];

        for (let i = 1; i <= qtd; i++) {

            if (i < qtd) {
                lista.push(<span>{i}, </span>)
            } else {
                lista.push(<span>{i}</span>)
            }


        }

        return lista;

    }

    return(
        <div>
            {criaLista(10)}
        </div>
    );
}