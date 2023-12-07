const form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = form.name.value;
    const idade = form.age.value;
    const acompanhadoPelosPais = form.checkedParents.checked;
    const temIngresso = form.hasTickets.checked;
    const temCovid = form.hasCovid.checked;

    console.info(nome, idade, acompanhadoPelosPais, temIngresso, temCovid);

    const listaDeNomes = nome.split(" ");

    if(listaDeNomes.leght < 2) {
        alert("Por favor, digite seu nome completo")
        return
    
    }

    if(idade < 18) {
        if(!acompanhadoPelosPais){
            alert("Você é menor de idade, e não esta acompanhado pelos pais")
            return
        }
        if(temCovid) {
            alert("você está com covid, não pode entrar")
            return
        }
    }
})


