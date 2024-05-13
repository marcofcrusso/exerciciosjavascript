// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.

// -----------------------------------------------------------------------------------------------

//3 numeros digitados estao em ordem crescente?
let primeironum = parseInt (prompt ("digite primeiro numero: "))
let segundonum = parseInt (prompt ("digite segundo numero: "))
let terceironum = parseInt (prompt ("digite terceiro numero: "))


//ordem crescente?
if (primeironum < segundonum && segundonum < terceironum) {
    console.log ("NUMEROS ESTAO CRESCENTES")
}



else if (primeiroum != segundonum != terceironum ) {
    console.log ("NAO CRESCENTE")
}


//ordem decrescente?

// --------------------------------------------------------------------------------------------
//um programa que solciita 3 numeros diferentes ao usuario 
//escreva 
let primeiroNumero = parseInt (prompt("Digite o primeiro numero: "));
let primeiroNumero = parseInt (prompt("Digite o segundo numero: "));
let primeiroNumero = parseInt (prompt("Digite o terceiro numero: "));

if (primeiroNumero < segundoNumero && segundoNumero < terceiroNumero) {
    console.log("Os numeros estao em ordem crescente!!!")
}

else {
    console.log ("Os numeros NAO estao em ordem crescente!!!")
}