function colour(){

	var element = document.getElementById("titre_principal");
    element.style.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)

}

function resetcolour(){
    var element = document.getElementById("titre_principal");
    element.style.color = "white"
}



