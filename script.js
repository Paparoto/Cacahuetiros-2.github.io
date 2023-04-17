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

// Récupération du fichier XML
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // Parse le fichier XML
        var xml = this.responseXML;

        // Récupère le prix du produit "Collier cacahuète en Or" grâce à XPath
        var price = xml.evaluate("//Sheet1[Nom='Collier cacahuète en Or']/Prix", xml, null, XPathResult.NUMBER_TYPE, null).numberValue;

        // Affiche le prix sur la page
        document.getElementById("price").innerHTML = price.toFixed(2) + " €";
    }
};
xhttp.open("GET", "données.xml", true);
xhttp.send();