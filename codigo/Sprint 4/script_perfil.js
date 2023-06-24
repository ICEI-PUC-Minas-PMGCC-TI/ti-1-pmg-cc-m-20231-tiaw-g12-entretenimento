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

function le_Usuarios() {
    let strUsuarios = localStorage.getItem('db');
    let objUsuarios = {};

    if (strUsuarios) {
        objUsuarios = JSON.parse(strUsuarios);
    } else {
        objUsuarios = {
            usuarios: [
                {id: 0, Comentario:"Muito legal"}
            ]
        };
    }
    return objUsuarios;
}

function imprime_Informacao() {
    let tela = document.getElementById('tela');
    let strHtml = '<p>ID | Login | Nome | Email | Data de Nascimento | Cidade | Telefone</p>';
    let objUsuarios = le_Usuarios();

    for (let i = 0; i < objUsuarios.usuarios.length; i++) {
        strHtml += `<p>${objUsuarios.usuarios[i].id} |
        ${objUsuarios.usuarios[i].Login} |
        ${objUsuarios.usuarios[i].Nome} |
        ${objUsuarios.usuarios[i].Email} |
        ${objUsuarios.usuarios[i].Data} |
        ${objUsuarios.usuarios[i].Cidade} |
        ${objUsuarios.usuarios[i].Telefone}</p>`
    }

    tela.innerHTML = strHtml;
}
