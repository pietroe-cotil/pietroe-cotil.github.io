nomes={ 
    "historia.html":"HISTÓRIA", 
    "personagens.html":"PERSONAGENS", 
    "index.html":"INÍCIO",
    "areas.html":"ÁREAS"
};

nome = window.location.pathname.split("/").pop();

if (nomes[nome]) {
    nome = nomes[nome];
}

document.title = "Site de UNDERTALE - " + nome