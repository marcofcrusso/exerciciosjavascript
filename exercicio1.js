//Exercício 1: Verificação de login
//Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
//nome de usuário é "admin" e a senha é "senha123". Exiba uma mensagem indicando se o login
//foi bem-sucedido ou não.


//solicita ao usuario um nome de usuario
let username = prompt ("Digite seu usuario: ");

//solicita ao usuario uma senha
let senha = prompt ("Digite a senha: ");


//verifique se usuario e "admin" E a senha e "senha123"
//CASO SIM - > Exiba mensagem de login bem sucedida
//CASO NAO -> Exiba a mensagem de usuario ou senha incorreta
if(username == "admin" && senha == "senha123") {
    console.log("Login bem sucedido");
} else {
    console.log("Voce não tem permissão de acesso")
}

//Exiba uma mensagem indicando se o login foi bem-sucedido ou não



