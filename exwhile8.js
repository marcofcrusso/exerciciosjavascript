// 8. Faça um programa que receba a idade do usuário, enquanto a
// resposta do usuário for menor que 18 anos continue a solicitar a
// idade e mostre uma mensagem quando a idade do usuário for
// maior que 18.


let idade = parseInt (prompt("Informe sua idade: ")) 

while (idade < 18 ){
    idade = parseInt(prompt(" Voce e menor de idade. Por favor, digite sua idade novamente: "))
}   

console.log("Voce e maior de idade. Sua idade e: " + idade);

    