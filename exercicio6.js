// Exercício 6: Verificação de idade
// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.



let anoNascimento = parseInt (prompt("Digite o ano de nascimento: "))
let anoAtual = 2024
let idade = anoAtual - anodeNascimento;

if (idade >= 18){
    console.log ("voce e maior de idade")
    console.log ("sua idade e" + idade)
}

else {
    console.log ("voce e menor de idade")
    console.log ("sua idade e " + idade)
}