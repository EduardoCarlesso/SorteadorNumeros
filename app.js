function sortear(){
    let qtdNumerosSorteados = parseInt(document.getElementById("quantidade").value);
    let numeroMinimo = parseInt(document.getElementById("de").value);
    let numeroMaximo = parseInt(document.getElementById("ate").value);
    let numeroSorteado;
    let sorteados =[];
    for(i = 0; i < qtdNumerosSorteados; i++){
        numeroSorteado = sorteiaNumeros(numeroMinimo, numeroMaximo);

        while(sorteados.includes(numeroSorteado)){
            numeroSorteado = sorteiaNumeros(numeroMinimo, numeroMaximo);        
        }

        sorteados.push(numeroSorteado);
    }
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Números sorteados: " + sorteados;
    habilitarBotaoReinicio();
}

function sorteiaNumeros( min, max){
    return sorteio = parseInt(Math.random() * ((max+1) - min) + min);   
}

function habilitarBotaoReinicio(){
    let botao = document.getElementById("btn-reiniciar");
    if(botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    }else{
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar(){
    let botao = document.getElementById("btn-reiniciar");
    if(botao.classList.contains("container__botao")){ 
        let qtdNumerosSorteados = document.getElementById("quantidade").value = "";
        let numeroMinimo = document.getElementById("de").value = "";
        let numeroMaximo = document.getElementById("ate").value = "";
    }
}