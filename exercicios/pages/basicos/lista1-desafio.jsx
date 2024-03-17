/*

<div>
    <span>1, </span>
    <span>2, </span>
    <span>3, </span>
    <span>4, </span>
    <span>5, </span>
    <span>6, </span>
    <span>7, </span>
    <span>8, </span>
    <span>9, </span>
    <span>10, </span>
</div>

*/

function criaLista(valor = 10) {
    const lista = [];

    for(let i = 1; i <= valor; i++) {

        let trechoJsx = i < 10 ? (<span>{i}, </span>) : (<span>{i} </span>);

        lista.push(trechoJsx);

    }

    return lista;

}

export default function lista1_desafio() {

    return criaLista();

}