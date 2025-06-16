nomes={ 
    "index.html":"INÍCIO",
    "":"INÍCIO",
    "historia.html":"HISTÓRIA", 
    "historia":"HISTÓRIA", 
    "personagens.html":"PERSONAGENS", 
    "personagens":"PERSONAGENS", 
    "areas.html":"ÁREAS",
    "areas":"ÁREAS",
    "inscricao":"INSCRIÇÃO",
    "inscricao.html":"INSCRIÇÃO",
};

nome = window.location.pathname.split("/").pop();

if (nomes[nome]) {
    nome = nomes[nome];
}

document.title = "Site de UNDERTALE - " + nome
