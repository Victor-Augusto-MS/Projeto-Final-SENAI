function entrar() {

let email = document.querySelector('#login')
let password = document.querySelector('#senha')
let email1 = email.value
let password1 = password.value

    if (email1 == "0000725714@senaimgaluno.com.br" && password1 == "12345"){
        console.log(email1)
        window.location.replace("/Home_usuário/index.html");
    }else {
        alert("Email ou senha inválido")
    }
}