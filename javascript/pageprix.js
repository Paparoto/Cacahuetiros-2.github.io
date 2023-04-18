function changeimagevente(nombre_vente){
    var element = document.getElementById("image_prix" + nombre_vente)
    element.src = "../images/vente" + nombre_vente + "_2.png"
}

function resetimagevente(nombre_vente){
    var element = document.getElementById("image_prix" + nombre_vente)
    element.src = "../images/vente" + nombre_vente + ".png"
}

for (let i = 1; i < 7; i++) {
    // Récupération du fichier XML
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        // Parse le fichier XML
        var xml = this.responseXML;


    var section_tous_les_prix = document.querySelector(".all_price");
        var produit = document.createElement("a");produit.setAttribute('href', "prix/vente" + i + ".html");
            var section_détails_prix = document.createElement("section");section_détails_prix.setAttribute('class', "prix");
                var prix_des = document.createElement("p");prix_des.setAttribute('class', "prix_des");prix_des.innerText = xml.evaluate("//Sheet1[Numéro_vente='" + i + "']/Nom", xml, null, XPathResult.STRING_TYPE, null).stringValue;
                section_détails_prix.appendChild(prix_des);
                var image_prix = document.createElement("img");image_prix.setAttribute("src","../images/vente" +i +".png");image_prix.setAttribute("class","image_prix");image_prix.setAttribute("id","image_prix" + i);image_prix.setAttribute("onmouseover","changeimagevente("+i+")");image_prix.setAttribute("onmouseout","resetimagevente("+i+")");
                section_détails_prix.appendChild(image_prix);
                var texte_prix = document.createElement("p");texte_prix.setAttribute("class","texte_prix");texte_prix.innerText = xml.evaluate("//Sheet1[Numéro_vente='" + i + "']/Prix", xml, null, XPathResult.STRING_TYPE, null).stringValue+"€";
                section_détails_prix.appendChild(texte_prix);
            produit.appendChild(section_détails_prix);
        section_tous_les_prix.appendChild(produit);
    }
    };
    xhttp.open("GET", "../données.xml", true);
    xhttp.send();
};

