function login() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    var validUser = "admin";
    var validPassword = "12345";

    if (user === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    if (user === validUser && password === validPassword) {
        window.location.href = "index2.html";
        alert("Login bem sucedido. Seja bem vindo!");
    } else {
        alert("Usuário ou senha incorretos. Tente novamente.");
    }
}

function redirectToRegister(){
    window.location.href = "register.html";
}
