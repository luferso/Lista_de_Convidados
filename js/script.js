let convidados = [];
let ul = document.getElementById("convidados");

function cadastra_convidado(){
    let nome = document.getElementById("i_nome").value;
    convidados.push(nome)

    document.getElementById("i_nome").value = "";
    desenha_lista()
}

function remove_convidado(){
    convidados.pop()
    desenha_lista()
}

function desenha_lista(){
    ul.innerHTML = "";
    for(let x=0; x< convidados.length; x++){
    ul.innerHTML += `<li> ${convidados[x]} </li>`
    }
}
