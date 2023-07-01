function le_Usuarios() {
    let strUsuarios = localStorage.getItem('db');
    let objUsuarios = {};

    if (strUsuarios) {
        objUsuarios = JSON.parse(strUsuarios);
    } else {
        objUsuarios = {
            usuarios: [
                { id: 0, login: "Jorge", email: "jorge@email.com", senha: "23571113", logado: true }
            ]
        };
    }
    return objUsuarios;
}

function imprime_Usuario() {
    let tela = document.getElementById('usuario');
    let strHtml = '';
    let objUsuarios = le_Usuarios();

    for (let i = 0; i < objUsuarios.usuarios.length; i++) {
        if (objUsuarios.usuarios[i].logado) {
            strHtml += `${objUsuarios.usuarios[i].login}`;
        }
    }

    tela.innerHTML = strHtml;
}

imprime_Usuario();

function le_Filmes() {
    return fetch('movies.json')
        .then(res => res.json())
        .then(json => {
            return json;
        });
}

function salva_Filmes() {
    le_Filmes().then(objFilmes => {
        localStorage.setItem('filmes', JSON.stringify(objFilmes));
    });
}

salva_Filmes();

function imprime_Favoritos() {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objFilmes = JSON.parse(localStorage.getItem('filmes'));

    for (let i = 0; i < objFilmes.filmes.length; i++) {
        if (objFilmes.filmes[i].favorito) {
            strHtml += `
            <div class="row py-4 border-top border-light">
                <div class="col-1">
                    <a href="movie-sceen.html?id=${objFilmes.filmes[i].id}"><img src="${objFilmes.filmes[i].moviePosterSrc}" alt="${objFilmes.filmes[i].title}" class="container-fluid"></a>
                </div>
                <div class="col-9">
                <a href="movie-sceen.html?id=${objFilmes.filmes[i].id}"><div class="text-light h4">${objFilmes.filmes[i].title}</div></a>
                </div>
                <div class="col-2">
                    <button id="${objFilmes.filmes[i].id}" class="btn btn-danger" onclick="remove_Favorito(this.id);">Remover</button>
                </div>
            </div>`;
        }
    }

    tela.innerHTML = strHtml;
}

imprime_Favoritos();

function remove_Favorito(id) {
    let objFilmes = JSON.parse(localStorage.getItem('filmes'));

    for (let i = 0; i < objFilmes.filmes.length; i++) {
        if (objFilmes.filmes[i].id == id) {
            objFilmes.filmes[i].favorito = false;
        }
    }

    localStorage.setItem('filmes', JSON.stringify(objFilmes));

    imprime_Favoritos();
}

document.getElementById('rnc').addEventListener('click', function () {
    salva_Filmes();
    imprime_Favoritos();
});