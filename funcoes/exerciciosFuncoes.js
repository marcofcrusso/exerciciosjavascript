// Construir um menu que e possivel escolher um exercicio entre os exercicios anteriores, 
//para ser executado.Faca com que o menu repita sua execucao, disponibilize opcoes para o
//usuario, ate que seja digitado
//3 de if else e 3 da pasta loop


function exercloop1(){ //numeros impares

for(let num = 0; num <= 50; num++)
    if (num%2 !==0) {
        console.log(num)
    }
}


function exercloop2() {    //numeros pares

for(let num = 1; num <=10; num++) 
    if(num%2 == 0) {
        console.log(num)
    }
}


function exercloop3(){ //fibonacci
    let fib1 = 1; 
    let fib2 = 1;
    
    //imprime os primeiros 10 numeros da sequencia de fibonacci
    console.log ("Os primeiros 10 numeros da sequencia de Fibonacci sao: ");
    console.log(fib1);
    console.log(fib2);
    
    //itera para calcular e imprimir os proximos 8 numeros da sequencia de fibonacci
    for(let i = 2; i <10; i++){
        let nextfib = fib1 + fib2;
        console.log(nextfib);
        
        //atualizar os valores de fib1 e fib2 para os proximos calculos
        fib1 = fib2;
        fib2 = nextfib;
    
    }

}


function ifelse1(){ //Dia da semana 
    let numero = prompt("Digite o numero que represente o dia da semana: ");


if(numero == "1"){
    console.log("segunda-feira");
} 

else if(numero == "2"){
    console.log("terça-feira");
}

else if(numero == "3"){
    console.log("quarta-feira");
}

else if(numero == "4"){
    console.log("quinta-feira");
}

else if(numero == "5"){
    console.log("sexta-feira");
}

else if(numero == "6"){
    console.log("sabado");
}

else if(numero == "7"){
    console.log("domingo");
}


else {
    console.log("numero invalido");
}

}


function ifelse2() {
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
}


function ifelse3(){
    let peso = parseFloat(prompt("informe o seu peso em (kg): "));

    let altura = parseFloat(prompt ("informe a sua altura (em metros): "));
    
    let imc = peso / (altura*altura);
    
    console.log("seu IMC e: " + imc);
    
    if(imc < 18.5){
        console.log("abaixo do peso");
    }
    
    else if (imc >= 18.5 && imc <= 24.9) {
        console.log("peso normal");
    }
    
    else if (imc >= 25 && imc <= 29.9) {
        console.log("sobrepeso");
    }
    
    else if (imc >= 30.0 && imc <= 34.9) {
        console.log("obesidade grau 1");
    }
    
    else if (imc >= 35.0 && imc <= 39.9) {
        console.log("obesidade grau 2");
    }
    
    else {
        console.log("obesidade grau 3")
    }
}

function sair(){
    window.prompt("Digite sair para sair")
}


let opcao = window.prompt("MENU\nDigite a opcao desejada: \n\n1 - Numeros impares\n2 - Numeros pares\n3 - Fibonacci\n4 - Dia da semana\n5 - Media notas\n6 - Calculo IMC\n7- Sair")

switch (opcao) {
    case "1":
        exercloop1 ()
        break;


        case "2":
            exercloop2()
            break


            case "3":
                exercloop3()
                break

                case "4":
                    ifelse1()
                    break

                    case "5":
                    ifelse2()
                    break

                    case "6":
                        ifelse3()
                        break

                        case "7":
                        sair()
                        break
                    
} while (opcao != "sair");



