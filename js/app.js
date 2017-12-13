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


Example
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// dropdown
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}





