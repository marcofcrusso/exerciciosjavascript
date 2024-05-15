// 4. Faça um programa que imprima na tela a tabuada de um número
// qualquer escolhido pelo usuário até o 10.



// Solicita ao usuário que insira um número
var numero = parseInt(prompt("Insira um número para ver sua tabuada:"));

// Verifica se o número é válido
if (!isNaN(numero)) {
    // Loop de 1 a 10 para calcular e exibir a tabuada
    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
    }
} else {
    console.log("Por favor, insira um número válido.");
}

//=========================================================================================================================================

let numero = parseint(prompt ("Digite um numero para ver na tabuada: "));

if(!isNaN(numero)) {

for(let cont = 1; cont <= 10; cont++) {
    console.log(numero + "x" + cont + "=" + (numero*cont));
}

} else {
    console.log("Numero invalido. Por favor, digite um numero valido.")
}



console.log(isNaN("hello world"));//retorna true
console.log(isNaN(123)); //retorna false









