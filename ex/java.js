nomes={ 
    "index.html":"INÍCIO",
    "":"INÍCIO",
    "historia.html":"HISTÓRIA", 
    "personagens.html":"PERSONAGENS", 
    "areas.html":"ÁREAS"
};

nome = window.location.pathname.split("/").pop();

if (nomes[nome]) {
    nome = nomes[nome];
}

document.title = "Site de UNDERTALE - " + nome
