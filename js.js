

//tableau des couleurs 
var tabColor = ['Blue', 'Green', 'Yellow', 'Red', 'Gray'];

//tableau de link
var tabLink = ['http://www.google.fr', 'http://www.netscape.com', 'http://www.computer-in-action.net',
 'http://www.yahoo.com', 'http://www.toto.fr'];

//fonction d'application de la couleur au BG
var changeColor = function() {
    //recuperation de la valeur inscrite
    var couleurRecup = document.getElementById('couleurEnvoye').value;
    var titrePage = document.getElementById('titrePage');
    
    //changement de la couleur du BG de la page en foncton de la valeur envoye
    if(couleurRecup >= 0 && couleurRecup <= 4) {
        document.body.style.backgroundColor = tabColor[couleurRecup];
        titrePage.style.color = tabColor[5-couleurRecup];
    }

    //remise a zero du champ text
    var effacerChamp = document.getElementById('couleurEnvoye');
    effacerChamp.value = "";

    //changement de lien accueil vers google
    document.getElementById('lienAccueil').href=tabLink[couleurRecup];

    return false;
}
