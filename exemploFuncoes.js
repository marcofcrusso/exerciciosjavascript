

function saudacao() {

 let nomePessoa = prompt("Digite seu nome: ")

 let horaAtual = new Date().getHours()

 if (horaAtual > 6 && horaAtual < 13){
    window.alert("Bom dia " + nomePessoa)
 } else if (horaAtual >=13 && horaAtual < 18){
    window.alert("Boa tarde" + nomePessoa)
 } else {
    window.alert("Boa noite" + nomePessoa)
 }

}

//saudacao()



function somar (num1, num2, num3) {
    let soma = num1 + num2 + num3
    return soma
}

//let resultado = somar(5,6,9)//soma 5+6+9 = 20 
//let resultado2 = somar(1,1,1)//soma = 3 


//console.log("O resultado é: " + resultado);

//==============================================================================================================================

//window.alert("EXCELSIOR")//mostra caixa com mensagem desejada na tela ex: palavra "EXCELSIOR"
//console.log("Outro texto")
//window.prompt("digite algo: ")

//==============================================================================================================================

//EXEMPLO OBJETO

let professor = {}

professor.nome = prompt("Digite o nome")
professor.sobrenome = prompt("Digite o sobrenome")
professor.idade = parseInt(prompt("Digite a idade"))

console.log(professor);




