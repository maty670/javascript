function cambiarTypeDate(){

let elemento=document.querySelector(".elemento");  //Obtener el primer elemento de la clase 'elemento'

elemento.type="date";

}

function cambiarTypeButton(){

let elemento=document.querySelector(".elemento");  //Obtener el primer elemento de la clase 'elemento'

elemento.type="button";

}

function cambiarClase(){
	elemento=document.getElementById("forma");  //Obtener el primer elemento con id 'forma'


	if(elemento.classList.contains('caja')){   					 //Obtener el listado de las clases del elemento 'elemento' y devuelve true si conteiene la clase 'caja'
		elemento.classList.replace("caja","rectangulo");    	 //Reemplazar la clase del elemento, de caja a rectangulo
	}else if(elemento.classList.contains('rectangulo')) {
		elemento.classList.replace("rectangulo","caja");	     //Reemplazar la clase del elemento, de rectangulo a caja
	}

}


function cambiarColor(){
	elemento=document.getElementById("color");
	caja=document.getElementById("CajaVacia");   

	caja.style.backgroundColor=elemento.value;
}


















texto=document.getElementById("texto");

soloTexto=texto.textContent;
TextoConHtml=texto.innerHTML;
TextoConHtmlCompleto=texto.outerHTML;




document.write(`<br><br><br> ${soloTexto} con textContent solo devuelve el texto de un elemento<br><br><br>`);
document.write(` ${TextoConHtml} con innerHTML devuelve el texto con el contenido html del elemento<br><br>`);
document.write(` ${TextoConHtmlCompleto} con outerHTML devuelve el texto con el contenido html completo del elemento<br><br>`);