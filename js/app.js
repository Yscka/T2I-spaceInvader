function ajouter(balise, texte){
    var balise = document.createElement(balise);
    var contenu = document.createTextNode(texte);
    balise.appendChild(contenu);
    return balise;
}
var btn = document.getElementById('commencer');
var login = document.getElementById('home');
var logged = document.getElementById('start');
btn.onclick= function () {{
        home.style.display = 'none';
        start.style.display ='block';
        logged.appendChild(Welcome);
    }
};

