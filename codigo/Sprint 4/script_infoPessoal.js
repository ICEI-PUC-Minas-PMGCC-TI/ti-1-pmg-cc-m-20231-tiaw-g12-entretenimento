//caracteriza a forma de ler os dados
function le_Usuarios() {
    let strUsuarios = localStorage.getItem('db');
    let objUsuarios = {};

    if (strUsuarios) {
        objUsuarios = JSON.parse(strUsuarios);
    } else {
        objUsuarios = {
            usuarios: [
                {id: 0, Login: "Teste", Nome: "Tester", Email: "tester@gmail.com", Data: "02/06/2023", Cidade: "Belo Horizonte", Telefone: "31 15341720" }
            ]
        };
    }
    return objUsuarios;
}

//exclui os dados
function exclui_Informacao(){
    localStorage.clear();
}
document.getElementById('btn-salvar').addEventListener('click', imprime_Informacao);
document.getElementById('btn-excluir').addEventListener('click', exclui_Informacao);
document.getElementById('btn-imprimir').addEventListener('click', exclui_Informacao);
