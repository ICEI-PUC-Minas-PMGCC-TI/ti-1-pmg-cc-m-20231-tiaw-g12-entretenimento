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

function carregarFoto() {
    var foto = localStorage.getItem('foto');
    if (foto) {
      var fotoElement = document.getElementById('fotoDisplay');
      fotoElement.src = foto;
      alert('Foto carregada com sucesso!');
    } else {
      alert('Nenhuma foto salva.');
    }
  }

//mostra informação em alerta
function mostrarInformacoes() {
    var login = document.getElementById('Login').value;
    var nome = document.getElementById('Nome').value;
    var email = document.getElementById('Email').value;
    var data = document.getElementById('Data').value;
    var cidade = document.getElementById('Cidade').value;
    var telefone = document.getElementById('Telefone').value;
  
    var informacoes = "Informações atualizadas!" + "\n" +
                      "Login: " + login + "\n" +
                      "Nome: " + nome + "\n" +
                      "E-mail: " + email + "\n" +
                      "Data de Nascimento: " + data + "\n" +
                      "Cidade: " + cidade + "\n" +
                      "Telefone: " + telefone;
  
    alert(informacoes);
  }

// Para salvar a foto


//cadastra as informações
function cadastra_Informacao() {
    let objUsuarios = le_Informacao();

    let strLogin = document.getElementById('Login').value;
    let strNome = document.getElementById('Nome').value;
    let strEmail = document.getElementById('Email').value;
    let strData = document.getElementById('Data').value;
    let strCidade = document.getElementById('Cidade').value;
    let strTelefone = document.getElementById('Telefone').value;

    let novoUsuario = { id: strId, Login: strLogin, Nome: strNome, Email: strEmail, Data: strData, Cidade: strCidade, Telefone: strTelefone };
    objUsuarios.usuarios.push(novoUsuario);
    salva_Informacao(objUsuarios);
    //window.location.href="mostra_info.html"
}

function salvarHorarios() {
    var tabela = document.getElementsById('registrationForm')[0];
    var horarios = [];

    for (var i = 1; i < linhas.length; i++) {
        var linha = linhas[i];
        var horario = {};

        horario.hora = linha.cells[0].textContent;
        horario.segunda = linha.cells[1].textContent;
        horario.terca = linha.cells[2].textContent;
        horario.quarta = linha.cells[3].textContent;
        horario.quinta = linha.cells[4].textContent;
        horario.sexta = linha.cells[5].textContent;
        horario.sabado = linha.cells[6].textContent;

        horarios.push(horario);
    }

    var jsonHorarios = JSON.stringify(horarios);
    localStorage.setItem('horarios', jsonHorarios);
    alert('Horários salvos com sucesso!');
}

//salva as informações
function salva_Informacao(dados) {
    localStorage.setItem('db', JSON.stringify(dados));
}

//botão de confirmar
document.getElementById('btn-salvar').addEventListener('click', salva_Informacao);

function exclui_Informacao(){
    localStorage.clear();
}
