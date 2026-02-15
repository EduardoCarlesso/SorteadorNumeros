function sortear(){
    let qtdNumerosSorteados = parseInt(document.getElementById("quantidade").value);
    let numeroMinimo = parseInt(document.getElementById("de").value);
    let numeroMaximo = parseInt(document.getElementById("ate").value);
    let numeroSorteado;
    let sorteados =[];
    let controle = 0

    for(i = 0; i < qtdNumerosSorteados; i++){
        numeroSorteado = sorteiaNumeros(numeroMinimo, numeroMaximo);

        while(sorteados.includes(numeroSorteado)){
            numeroSorteado = sorteiaNumeros(numeroMinimo, numeroMaximo);        
        }

        sorteados.push(numeroSorteado);
    }
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Números sorteados: " + sorteados;

}

function sorteiaNumeros( min, max){
    return sorteio = parseInt(Math.random() * ((max+1) - min) + min);   
}
