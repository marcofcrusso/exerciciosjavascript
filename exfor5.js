// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

//inicializar os primeiros 2 numeros da sequencia de fibonacci
let fib1 = 1; 
let fib2 = 1;

//imprime os primeiros 10 numeros da sequencia de fibonacci
console.log ("Os primeiros 10 numeros da sequencia de Fibonacci sao: ");
console.log(fib1);
console.log(fib2);

//itera para calcular e imprimir os proximos 8 numeros da sequencia de fibonacci
for(let i = 2; <10; i++){
    let nextfib = fib1 + fib2;
    console.log(nextfib);
    
    //atualizar os valores de fib1 e fib2 para os proximos calculos
    fib1 = fib2;
    fib2 = nextfib;

}