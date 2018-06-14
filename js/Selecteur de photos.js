'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/

//je déclare une variable qui va correspondre à tous les éléments qui ont la classe img
var img = document.querySelectorAll('.img');
//je déclare une variable qui va correspondre à l'élément span du HTML
var span = document.querySelector('span');


/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function selected() { 
	//va ajouter ou enlever la classe selected définie dans la CSS à l'élément qui déclenche l'addEventListener (this)
	this.classList.toggle('selected');
	
	//je déclare une variable va correspondre au nombre d'élément qui ont la classe 'selected' car créé tableau où écris à chaque fois
	var imgSelected = document.querySelectorAll('.selected');

	// Je modifie le chiffre contenu dans la variable imgSelect, qui change le contenu dans le DOM
	span.textContent = imgSelected.length;
}


/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

for(var i = 0; i < img.length; i++) { // tant que i inférieur au nombre d'images, en partant de 0 (la première), incrémente index
	img[i].addEventListener('click', selected); // va surveiller si click sur img correspondant à index en cours et si oui déclencher la fonction selected (définie plus haut)
}
