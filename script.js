function colour(){

	var element = document.getElementById("titre_principal");
    element.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)

}

function resetcolour(){
    var element = document.getElementById("titre_principal");
    element.style.color = "white"
}

function changeimagevente(nombre_vente){
    var element = document.getElementById("image_prix" + nombre_vente)
    element.src = "../images/vente" + nombre_vente + "_2.png"
}

function resetimagevente(nombre_vente){
    var element = document.getElementById("image_prix" + nombre_vente)
    element.src = "../images/vente" + nombre_vente + ".png"
}

function getPrix(nomProduit) {
    // Récupération du fichier XML
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Parse le fichier XML
            var xml = this.responseXML;

            // Récupère le prix du produit correspondant au nom donné grâce à XPath
            var price = xml.evaluate("//Sheet1[Nom='" + nomProduit + "']/Prix", xml, null, XPathResult.NUMBER_TYPE, null).numberValue;

            // Vérifie que le prix a été trouvé
            if (price !== null) {
                // Affiche le prix sur la page
                console.log("Le prix du produit '" + nomProduit + "' est de " + price.toFixed(2) + " €");
            } else {
                console.log("Le produit '" + nomProduit + "' n'a pas été trouvé dans le fichier XML");
            }
        }
    };
    xhttp.open("GET", "donnees.xml", true);
    xhttp.send();
}
getPrix("Cacahuète en Argent");