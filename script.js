function colour(){

	var element = document.getElementById("titre_principal");
    element.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

}

function resetcolour(){
    var element = document.getElementById("titre_principal");
    element.style.color = "white";
}

function changeimagevente(nombre_vente,page_individuel){
    if (page_individuel){
        var element = document.getElementById("image_vente" + nombre_vente);
    } else {
        var element = document.getElementById("image_prix" + nombre_vente);
    }
    element.src = "C:/Users/paulreman/Desktop/NSI_projets/Cacahuetiros/Cacahuetiros-2.github.io/images/vente" + nombre_vente + "_2.png";
}

function resetimagevente(nombre_vente,page_individuel){
    if (page_individuel){
        var element = document.getElementById("image_vente" + nombre_vente);
    } else {
        var element = document.getElementById("image_prix" + nombre_vente);
    }
    element.src = "C:/Users/paulreman/Desktop/NSI_projets/Cacahuetiros/Cacahuetiros-2.github.io/images/vente" + nombre_vente + ".png"
}

function changecolorretour(){
    var retour_img = document.getElementById("retour_image");
    var section_retour = document.getElementById("retour");
    retour_image.src = "../../images/retour_2.png ";
    section_retour.style.background = "black";section_retour.style.color="white";
}

function resetcolorretour(){
    var retour_img = document.getElementById("retour_image");
    var section_retour = document.getElementById("retour");
    retour_image.src = "../../images/retour.png";
    section_retour.style.background = "white";section_retour.style.color="black";
}

