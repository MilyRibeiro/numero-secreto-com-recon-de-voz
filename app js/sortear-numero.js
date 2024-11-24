const numeroSecreto = gerarNumeroAleatorio();
const menorValor = 1;
const maiorValor = 10;

function gerarNumeroAleatorio() {
    return parseInt(Math.random() *100);
}

console.log('O número secreto é: ', numeroSecreto);
