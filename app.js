function sortear(){
    let qtdNumerosSorteados = parseInt(document.getElementById("quantidade").value);
    let numeroMinimo = parseInt(document.getElementById("de").value);
    let numeroMaximo = parseInt(document.getElementById("ate").value);
    let controle = 0;
    let NumeroSorteado;
    let sorteados = [];

    for(controle == 0; controle < qtdNumerosSorteados; controle++){

        NumeroSorteado = parseInt(Math.random() * numeroMaximo + 1);    // utilizar hashmap para ver repetição de numeros   
        sorteados.push(NumeroSorteado);
    }
    alert(sorteados);
    let exibirSorteio = document.getElementById("resultado");
    exibirSorteio.value.includes(sorteados);
}
