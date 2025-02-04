function exibirNome() {
    let nome = document.getElementById("nome").value;

    //console.log("nome digitado:" , nome);

    document.getElementById("msg").innerHTML = "Olá, " + nome + "!";    
}