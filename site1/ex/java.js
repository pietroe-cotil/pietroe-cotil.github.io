nomes={ 
    "index.html":"INÍCIO",
    "":"INÍCIO",
    "historia.html":"HISTÓRIA", 
    "historia":"HISTÓRIA", 
    "personagens.html":"PERSONAGENS", 
    "personagens":"PERSONAGENS", 
    "roteiro.html":"ROTEIRO",
    "roteiro":"ROTEIRO",
    "inscricao":"INSCRIÇÃO",
    "inscricao.html":"INSCRIÇÃO",
};

nome = window.location.pathname.split("/").pop();

if (nomes[nome]) {
    nome = nomes[nome];
}

document.title = "Site de UNDERTALE - " + nome
