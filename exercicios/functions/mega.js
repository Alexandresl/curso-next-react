export function mega(qtde = 6, numeros = []) {

    if (qtde < 6 || qtde > 60) {
        throw "Quantidade inválida!";
    }

    if (numeros.length === qtde) {
        return numeros.sort((a, b) => a - b);
    }

    const numeroAleatorio = parseInt(Math.random() * 60) + 1;

    if (!numeros.includes(numeroAleatorio)) {
        return mega(qtde, [...numeros, numeroAleatorio]);
    } else {
        return mega(qtde, numeros);
    }
    
}
