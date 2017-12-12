function ajouter(balise, texte){
    var balise = document.createElement(balise);
    var contenu = document.createTextNode(texte);
    balise.appendChild(contenu);
    return balise;
}

// uderline permanant sous liens actif
var chemin = document.location.href;
var url = chemin.split("/").pop(-1);

listeDesLiens = document.getElementById("nav-bar").getElementsByTagName("a");
for (var i=0; i<listeDesLiens.length; i++) {
    // on compare le href avec le chemin de la page en cours
    if(listeDesLiens[i].getAttribute("href") == url){
        // on modifie le style du lien actif
        listeDesLiens[i].style.textDecoration = "underline #f9a918";

        // on sort de la boucle
        break;
    }

}

var btn = document.getElementById('commencer');
var login = document.getElementById('home');
var logged = document.getElementById('start');
btn.onclick= function () {
        home.style.display = 'none';
        start.style.display ='block';
        logged.appendChild(Welcome);
    };








