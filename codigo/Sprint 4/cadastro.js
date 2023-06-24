function salva_Usuario(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

function le_Usuarios() {
    let strUsuarios = localStorage.getItem('db');
    let objUsuarios = {};

    if (strUsuarios) {
        objUsuarios = JSON.parse(strUsuarios);
    } else {
        objUsuarios = {
            usuarios: [
                { id: 0, login: "Jorge", email: "jorge@email.com", senha: "23571113" }
            ]
        };
    }
    return objUsuarios;
}

function cadastra_Usuario() {
    let objUsuarios = le_Usuarios();

    let strId = (objUsuarios.usuarios.slice(-1)[0].id) + 1;
    let strLogin = document.getElementById('login').value;
    let strEmail = document.getElementById('email').value;
    let strSenha = document.getElementById('senha').value;
    let confirmarSenha = document.getElementById('confirmar-senha').value;

    if (strSenha === confirmarSenha) {
        let novoUsuario = { id: strId, login: strLogin, email: strEmail, senha: strSenha };
        objUsuarios.usuarios.push(novoUsuario);
        salva_Usuario(objUsuarios);
        window.location.href = "tela-sucesso.html";
    } else {
        alert("Falha na confirmação de senha");
    }
}

document.getElementById('btn-cadastrar').addEventListener('click', cadastra_Usuario);
document.getElementById('btn-cadastrar').addEventListener('click', function (e) {
    e.preventDefault();
});