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

// ------------------------------------------------------------------------------------
// outra forma de fazer

// //parseint ja converte o que foi digitado para numero
// let num = parseInt(prompt ("informe um numero inteiro: "));

// //se o numero for divisivel ou igual a 2 ele e par
// if(num % 2 == 0){
// console.log("o numero informado e par");
// }


// //se o numero nao for divisivel sera impar
// else {
//     console.log ("o numero informado e impar");
// }