function cadastrar() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    if (username === "" || email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    console.log("Usuário:", username);
    console.log("E-mail:", email);
    console.log("Senha:", password);

    window.location.href = 'index.html';
    alert("Conta criada com sucesso!");
}
