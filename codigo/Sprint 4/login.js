// Função para verificar o login
function verificarLogin(event) {
  event.preventDefault(); // Evita o comportamento padrão do formulário

  // Obtém os valores inseridos pelo usuário
  var email = document.getElementById('exampleDropdownFormEmail1').value;
  var senha = document.getElementById('exampleDropdownFormPassword1').value;

  // Obtém os usuários armazenados no LocalStorage
  var usuarios = JSON.parse(localStorage.getItem('usuarios'));

  // Verifica se existe algum usuário com o email e senha fornecidos
  var usuarioEncontrado = usuarios.find(function (usuario) {
    usuario.logado = false;
    if(usuario.email === email && usuario.senha === senha){
      usuario.logado = true;
    }
    return usuario.email === email && usuario.senha === senha;
  });

  if (usuarioEncontrado) {
    alert('Login bem-sucedido!');
    redirecionarParaOutraPagina(); // Redireciona para outra página
    // Realize aqui as ações necessárias após o login ser bem-sucedido
  } else {
    alert('Email ou senha inválidos. Por favor, tente novamente.');
  }
}

// Função para inicializar o LocalStorage com usuários de exemplo
function inicializarLocalStorage() {
  // Verifica se o LocalStorage já foi inicializado
  if (!localStorage.getItem('usuarios')) {
    // Cria um array com usuários de exemplo
    var usuarios = [
      { id: 0, login: "Jorge", email: "jorge@email.com", senha: "23571113", logado: false }
    ];

    // Armazena o array no LocalStorage como uma string JSON
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }
}

// Chamada da função de inicialização ao carregar a página
inicializarLocalStorage();

// Adiciona o evento de clique ao botão de login
var btnLogin = document.getElementById('btn-login');
btnLogin.addEventListener('click', verificarLogin);

function redirecionarParaOutraPagina() {
  window.location.href = "index.html";
}

  
  