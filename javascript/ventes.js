for (let i = 1; i < 8; i++) {

    // Récupération du fichier XML
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        // Parse le fichier XML
        var xml = this.responseXML;

    try {
        var head_vente = document.querySelector(".head_vente_" + i);
            var titre = document.createElement("title");titre.innerText = xml.evaluate("//Sheet1[Numéro_vente='" + i + "']/Nom", xml, null, XPathResult.STRING_TYPE, null).stringValue;
            head_vente.appendChild(titre);
        var body_vente = document.querySelector(".body_vente_"+i);
            var retour = document.createElement("a");retour.setAttribute("href","../pageprix.html");
                var section_retour = document.createElement("section");section_retour.setAttribute("id","retour");section_retour.setAttribute("onmouseover","changecolorretour()");section_retour.setAttribute("onmouseout","resetcolorretour()")
                    var image_retour = document.createElement("img");image_retour.setAttribute("src","../../images/retour.png");image_retour.setAttribute("id","retour_image");
                    section_retour.appendChild(image_retour);
                    section_retour.innerHTML += " retour ";
                retour.appendChild(section_retour);
            body_vente.appendChild(retour);
            var titre_vente = document.createElement("p");titre_vente.setAttribute("id","titre_vente");titre_vente.innerText = xml.evaluate("//Sheet1[Numéro_vente='" + i + "']/Nom", xml, null, XPathResult.STRING_TYPE, null).stringValue + " (" + xml.evaluate("//Sheet1[Numéro_vente='" + i + "']/Prix", xml, null, XPathResult.STRING_TYPE, null).stringValue + "€)";
            body_vente.appendChild(titre_vente);
            var presentation = document.createElement("section");presentation.setAttribute("id","presentation");
                var vente_des = document.createElement("p");vente_des.setAttribute("id","vente_des");vente_des.innerText = xml.evaluate("//Sheet1[Numéro_vente='" + i + "']/Description", xml, null, XPathResult.STRING_TYPE, null).stringValue;
                presentation.appendChild(vente_des);
                var image_vente = document.createElement("img");image_vente.setAttribute("src","../../images/vente"+i+".png");image_vente.setAttribute("class","image_vente");image_vente.setAttribute("id","image_vente"+i);image_vente.setAttribute("onmouseover","changeimagevente("+i+",true)");image_vente.setAttribute("onmouseout","resetimagevente("+i+",true)");
                presentation.appendChild(image_vente);
            body_vente.appendChild(presentation);
    } catch(error) {}

    }
    };
    xhttp.open("GET", "../../données.xml", true);
    xhttp.send();
};