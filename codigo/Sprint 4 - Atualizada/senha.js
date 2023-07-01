// Função para verificar e alterar a senha
function verificarAlterarSenha(event) {
  event.preventDefault(); // Evita o comportamento padrão do formulário

  // Obtém o email do usuário
  var email = document.getElementById('email').value;

  // Obtém os valores inseridos pelo usuário
  var senha1 = document.getElementById('senha1').value;
  var senha2 = document.getElementById('senha2').value;

  // Obtém os usuários armazenados no LocalStorage
  var usuarios = JSON.parse(localStorage.getItem('usuarios'));

  // Encontra o índice do usuário pelo email
  var usuarioIndex = usuarios.findIndex(function (usuario) {
    return usuario.email === email;
  });

  if (usuarioIndex !== -1) {
    if (senha1 === senha2) {
      // Senhas correspondem, atualiza a senha no LocalStorage
      usuarios[usuarioIndex].senha = senha1;
      localStorage.setItem('usuarios', JSON.stringify(usuarios));

      alert('Senha alterada com sucesso!');
      // Realize aqui as ações necessárias após a alteração de senha
      redirecionarParaOutraPagina();
    } else {
      // Senhas não correspondem, exibe mensagem de erro
      alert('As senhas não correspondem. Por favor, tente novamente.');
    }
  } else {
    // Usuário não encontrado, exibe mensagem de erro
    alert('Usuário não encontrado. Por favor, verifique o email e tente novamente.');
  }
}

// Adiciona o evento de clique ao botão de enviar senha
var btnEnviarSenha = document.getElementById('btn-senha');
btnEnviarSenha.addEventListener('click', verificarAlterarSenha);

function redirecionarParaOutraPagina() {
  window.location.href = "index.html";
}

