// Exercício 3: Ímpar ou par
// Faça um programa que receba um número do usuário e informe se este número é par ou
// ímpar.

// Recebendo um número do usuário
let numero = prompt("Digite um número: ");

// Convertendo o número para inteiro
numero = parseInt(numero);

// Verificando se o número é par ou ímpar
if(numero % 2 === 0) {
    console.log(numero + " é um número par.");
} else {
    console.log(numero + " é um número ímpar.");
}
