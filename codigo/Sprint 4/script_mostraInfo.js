//fazer o telefone ser apenas com números
function validarNumero(event) {
    var input = event.target;
    var value = input.value;
    var validNumber = /^\d+$/.test(value);
    
    if (!validNumber) {
        input.value = value.replace(/\D/g, '');
    }
}

//fazer o @ obrigatório no email
function validarTexto(event) {
    var input = event.target;
    var value = input.value;
    var validText = /@/.test(value);
    
    if (!validText) {
        input.setCustomValidity("Digite um texto que contenha o símbolo '@'");
    } else {
        input.setCustomValidity("");
    }
}

//pegar imagem dos arquivos
$(document).ready(function () {
    var readURL = function (input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.avatar').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".file-upload").on('change', function () {
        readURL(this);
    });
});

//cadastra as informações
function cadastra_Informacao() {
    let objUsuarios = le_Informacao();

    let strId = (objUsuarios.usuarios.slice(-1)[0].id) + 1;
    let strLogin = document.getElementById('Login').value;
    let strNome = document.getElementById('Nome').value;
    let strEmail = document.getElementById('Email').value;
    let strData = document.getElementById('Data').value;
    let strCidade = document.getElementById('Cidade').value;
    let strTelefone = document.getElementById('Telefone').value;

    let novoUsuario = { id: strId, Login: strLogin, Nome: strNome, Email: strEmail, Data: strData, Cidade: strCidade, Telefone: strTelefone };
    objUsuarios.usuarios.push(novoUsuario);
    salva_Informacao(objUsuarios);
    window.location.href="login.html"
}

//salva as informações
function salva_Informacao(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

//recebe as informações
function le_Informacao() {
    let strUsuarios = localStorage.getItem('db');
    let objUsuarios = {};

    if (strUsuarios) {
        objUsuarios = JSON.parse(strUsuarios);
    } else {
        objUsuarios = {
            usuarios: [
                { id: 0, Login: "Teste", Nome: "Tester", Email: "tester@gmail.com", Data: "02/06/2023", Cidade: "Belo Horizonte", Telefone: "31 1111-1111", logado: true }
            ]
        };
    }
    return objUsuarios;
}

//botão de confirmar
document.getElementById('btn-salvar').addEventListener('click', cadastra_Informacao);
document.getElementById('btn-salvar').addEventListener('click', function (e) {
    e.preventDefault();
});

function exclui_Informacao(){
    localStorage.clear();
}
