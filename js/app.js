function ajouter(balise, texte){
    var balise = document.createElement(balise);
    var contenu = document.createTextNode(texte);
    balise.appendChild(contenu);
    return balise;
}

btn.onclick= function () {
    var username = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var login = document.getElementById('login');
    var logged = document.getElementById('logged');
    var btn = document.getElementById('btn');
 console.log(username);
    if(username==false){
        texte = 'Veuillez entré votre username';
        var error = ajouter('p', texte);
        error.style.color = 'red'
        login.appendChild(error);
    }else if( pass==false ){
        texte = 'Veuillez entré votre mot de passe';
        var error = ajouter('p', texte);
        error.style.color = 'red'
        login.appendChild(error);
    }else{
        var form = document.getElementsByTagName('form');
        texte = 'Bienvenue '+username;
        var Welcome = ajouter('p', texte);
        login.style.display = 'none';
        logged.style.display ='block';
        logged.appendChild(Welcome);
    }
};

