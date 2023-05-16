/*este script foi criado, pois o botão voltar não existe na index(página principal)*/

document.getElementById('btn-voltar').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href ="index.html";
    });