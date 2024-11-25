function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return;
    }


    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>`;
        return;
    }

    if (numero === numeroSecreto) {
        recognition.stop();
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
        `;

        setTimeout(() => {
            document.body.innerHTML =`
                <h2>GAME OVER</h2>
                <h3>Pressione o botão para jogar novamente</h3>
            `;
            document.body.style.backgroundColor = "#FDE7BB";
            document.body.innerHTML += `<button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>`;
        }, 3000); // aguarda um pouco antes de exibir o botão "Jogar Novamente"

    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i></div>`;
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i></div>`;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);   
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})