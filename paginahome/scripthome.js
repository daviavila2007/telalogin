let usuario = JSON.parse(localStorage.getItem("logado"));
document.getElementById("titulo").innerHTML = "Bem vindo, "+usuario.login+"!";

function deslogar(){
    window.location.href = "../index.html"
}