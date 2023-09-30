const campologin = document.getElementById("login")
const camposenha = document.getElementById("senha")
const camponovologin = document.getElementById("novologin")
const camponovasenha = document.getElementById("novasenha")
const camporepetirsenha = document.getElementById("repetirsenha")

let usuarios = [];

function cadastro(){
    if (camponovasenha.value == camporepetirsenha.value && camponovasenha.value != "" && camponovologin.value != "") {
        const usuario = {
            login: camponovologin.value,
            senha: camponovasenha.value
        };
        let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
        if (bancoDeDados == null) {
            bancoDeDados = [];
        }
        bancoDeDados.push(usuario);
        localStorage.setItem("bancoDeDados", JSON.stringify(bancoDeDados));
        alert("Usuário cadastrado com sucesso!");
        window.location.href = "./index.html"
    } else {
        alert("As senhas não coincidem ou algum campo está vazio");
    }
}
function login(){
    let login = campologin.value;
    let senha = camposenha.value;
    let mensagem = "Usuário ou senha incorreta!";
    let bancoDeDados = JSON.parse(localStorage.getItem("bancoDeDados"));
    if (bancoDeDados == null) {
        mensagem = "Nenhum usuário cadastrado até o momento";
    } else {
        for (let usuario of bancoDeDados) {
            if (usuario.login == login && usuario.senha == senha) {
                mensagem = "Parabéns, você logou!";
                localStorage.setItem("logado", JSON.stringify(usuario));
                window.location.href = "./paginahome/home.html"
                break;
            }
        }
    }
    alert(mensagem);
}
function novapagina(){
    window.location.href = "./cadastro.html"
}
function deslogar(){
    window.location.href = "./index.html"
}