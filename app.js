function sortear(){
    let qtdNumerosSorteados = parseInt(document.getElementById("quantidade").value);
    let numeroMinimo = parseInt(document.getElementById("de").value);
    let numeroMaximo = parseInt(document.getElementById("ate").value);
    let numeroSorteado;
    let sorteados =[];
    let validade = logicaSorteio(numeroMinimo, numeroMaximo, qtdNumerosSorteados);
    if(validade){
        for(i = 0; i < qtdNumerosSorteados; i++){
            numeroSorteado = sorteiaNumeros(numeroMinimo, numeroMaximo);

            while(sorteados.includes(numeroSorteado)){
                numeroSorteado = sorteiaNumeros(numeroMinimo, numeroMaximo);        
            }
            sorteados.push(numeroSorteado);
        }
        exibirSorteados(sorteados);
    }
}

function logicaSorteio(min, max, qtdNumerosSorteados){
    let intervalo = (max - min) + 1;
    if(min > max){
        alert("Número mínimo deve ser menor ou igual ao maximo");
        return false;
    }
    if(qtdNumerosSorteados > intervalo){
        alert("Intervalo entre menor e maior valor deve ter quantidade mínima igual ao número de valores a ser sorteados");
        return false;
    }
    return true;
}

function sorteiaNumeros( min, max){
    return sorteio = parseInt(Math.random() * ((max+1) - min) + min);   
}

function exibirSorteados(sorteados){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Números sorteados: " + sorteados;        
    habilitarBotaoReinicio();
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
        document.getElementById("quantidade").value = "";
        document.getElementById("de").value = "";
        document.getElementById("ate").value = "";
        document.getElementById("resultado").value = "";
    }
}