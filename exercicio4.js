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


// ------------------------------------------------------------------------------------------

//receba 4 notas de um aluno

alert"informe as notas de 0 a 10"

let nota1 = parseFloat (prompt ("Digite a primeira nota: ")); 
let nota2 = parseFloat (prompt ("Digite a segunda nota: "));
let nota3 = parseFloat (prompt ("Digite a terceira nota: "));
let nota4 = parseFloat (prompt ("Digite a quarta nota: "));

//calcule e imprima a media aritmetica das notas
//precedencia de operadores em javascript e semelhante ao ensinado na escola
//multiplicacao e divisao sao realizado primeiro
//depois a adicao e subtracao 
//tofixed(2) --> define quantas casas decimais vc quer que aparece 1, 2, 3 ou 4 etc... 

let media = (nota1 + nota2 + nota3 + nota4) / 4
console.log("a media do aluno e: " + media.toFixed(2) )

if(media >=7){
    console.log ("aprovado")
}

else if(media < 7 && media >= 5) {
    console.log("RECUPERACAO")
}

else {
    console.log ("REPROVADO")
}



