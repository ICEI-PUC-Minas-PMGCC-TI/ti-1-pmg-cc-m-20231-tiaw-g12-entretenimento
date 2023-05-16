/*js do carrossel*/
var swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
});
/*fim do js do carrossel*/

/*json dos 2 carroseis de filmes: Vistos Recentemente e Favoritos*/
/*Colocando o ID, é possível descobrir o filme, o moviePosters se refere a imagem que identifica o filme*/
/*vistoRecentente e favoritado serão expressões booleanas, pois serão de marcar, se for true, aparece no perfil */
[
  {/*EXEMPLO GERAL*/
    "id": 0,
    "moviePosterSrc": "image.png",
    "vistoRecentemente": false,
    "favoritado": false, 
  },

  {/*Interstellar*/
    "id": 1,
    "moviePosterSrc": "https://upload.wikimedia.org/wikipedia/pt/3/3a/Interstellar_Filme.png",
    "vistoRecentemente": true,
    "favoritado": false, 
  },

  {/* KungFuPanda 3*/
    "id": 2,
    "moviePosterSrc": "https://upload.wikimedia.org/wikipedia/pt/thumb/d/d6/Kung_Fu_Panda_3.jpg/250px-Kung_Fu_Panda_3.jpg",
    "vistoRecentemente": true,
    "favoritado": false, 
  },

  {/*Carros*/
    "id": 3,
    "moviePosterSrc": "https://media.fstatic.com/v8pPDzHCuqRJ_U_dYaH1obx32No=/322x478/smart/filters:format(webp)/media/movies/covers/2017/07/MPW-45583.jpg",
    "vistoRecentemente": true,
    "favoritado": false, 
  },

  {/*Como Treinar seu Dragão 3*/
    "id": 4,
    "moviePosterSrc": "https://br.web.img3.acsta.net/pictures/18/11/13/12/10/5661398.jpg",
    "vistoRecentemente": false,
    "favoritado": true, 
  },

  {/*Shrek*/
    "id": 5,
    "moviePosterSrc": "https://upload.wikimedia.org/wikipedia/pt/e/e6/Shrek_Poster.jpg",
    "vistoRecentemente": false,
    "favoritado": true, 
  },

  {/*About Time*/
    "id": 6,
    "moviePosterSrc": "https://m.media-amazon.com/images/I/815Q1ufP6yL._AC_SL1500_.jpg",
    "vistoRecentemente": false,
    "favoritado": true, 
  },

]

/*json dos comentários*/

/*Os comentários serão compostos pelo avatar do usuário, sue nome e seu comentário. O id refere-se ao usuário*/
[
{/*Comentario 1*/
"id": 10,
"avatar": "https://img.elo7.com.br/product/zoom/3E7B130/arte-painel-do-kung-fu-panda-painel-redondo.jpg",
"usuario": "Usuario 1",
"comentario": "Gostei muito do seu perfil!"
},

{/*Comentario 2*/
"id": 20,
"avatar": "https://cdn.awsli.com.br/600x700/737/737284/produto/83581248/4449beada6.jpg",
"usuario": "Usuario 2",
"comentario": "Excelente escolha de filme!"
}
]

/*constantes*/
const AvatarBtn = document.getElementById("avatar");
const moviePosterElement = document.getElementById("menu");
const menuBtn = document.getElementById("btn-menu");
const avatarBtn = document.getElementById("btn-avatar");
const voltarBtn = document.getElementById("btn-voltar");


/*armazenar o escrito da descrição*/
function salva_Descricao(dados) {
  localStorage.setItem('bd descricao', JSON.stringify(dados));
}

/*armazenar o escrito dos comentários*/
function salva_Comentario(dados) {
  localStorage.setItem('bd comentario', JSON.stringify(dados));
}


/*código de comentários do futuro
function le_Comentarios() {
  let strUsuarios = localStorage.getItem('bd comentario');
  let objUsuarios = {};

  if (strUsuarios) {
      objUsuarios = JSON.parse(strUsuarios);
  } else {
      objUsuarios = {
          usuarios: [
              { id: 0, nome: "Jorge", avatar: "image.jpg", comentario: "Muito Legal o seu perfil!" }
          ]
      };
  }
  return objUsuarios;
}*/

/*código de comentários do futuro
function le_Comentarios() {
  let strUsuarios = localStorage.getItem('bd comentario');
  let objUsuarios = {};

  if (strUsuarios) {
      objUsuarios = JSON.parse(strUsuarios);
  } else {
      objUsuarios = {
          usuarios: [
              { id: 0, nome: "Jorge", avatar: "image.jpg", comentario: "Muito Legal o seu perfil!" }
          ]
      };
  }
  return objUsuarios;
}*/

/*mostrará o comentário na outra página*/
/*function imprime_Comentarios() {
  let tela = document.getElementById('tela');
  let strHtml = '<p>ID | NOME | AVATAR | COMENTÁRIO</p>';
  let objUsuarios = le_Usuarios();

  for (let i = 0; i < objUsuarios.usuarios.length; i++) {
      strHtml += `<p>${objUsuarios.usuarios[i].id} | ${objUsuarios.usuarios[i].nome} | ${objUsuarios.usuarios[i].avatar} | ${objUsuarios.usuarios[i].comentario}</p>`
  }

  tela.innerHTML = strHtml;
}*/

/*clicando no avatar, aparece a foto com a descrição e as medalhas em uma janela maior*/
document.getElementById('btn-avatar').addEventListener('click', function (e) {
  e.preventDefault();
  window.location.href = "medalha.html";
  });

/*clicando nos 3 traços do canto superior a esquerda, as configurações para os dados pessoais abrem, e será a
sprint 3*/
document.getElementById('btn-menu').addEventListener('click', function (e) {
e.preventDefault();
window.location.href = "perfilfechado.html";
});

