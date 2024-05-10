// Exercício 4: Notas escolares
// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.


//media de 4 notas
//o let serve para colocar as caixas(variavel),
//parsefloat serve pra aceitar numero quebrado com virgula
let nota1 = parseFloat (prompt ("nota1")); 
let nota2 = parseFloat (prompt ("nota2"));
let nota3 = parseFloat (prompt ("nota3"));
let nota4 = parseFloat (prompt ("nota4"));

//tirar a media 
let media = ((nota1 + nota2 + nota3 + nota4) / 4)   

//aprovado superior ou = 7,0
//IF SERVE COMO O SE 
//ELSE SE NAO 
if (media >= 7.0){
    console.log("APROVADO")
}

//recuperacao entre 5,0 e 7,0
else if (media >= 5.0 ) {
    console.log("RECUPERACAO")
}


//recuperacao inferior    5,0

else if (media < 5.0) {
    console.log("REPROVADO")
}