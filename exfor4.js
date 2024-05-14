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



