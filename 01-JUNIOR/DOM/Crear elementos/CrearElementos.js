


//Agregar un elemento a un contenedor
let contenedor = document.querySelector(".contenedor"); 	  //Obtener el elementos de la clase contenedor
const item = document.createElement("u");  					  //Crear un elemento con la etiqueta <u>
item.textContent = "Elemento creado con una etiqueta u";  // Agregar un texto al elemento creado 

contenedor.appendChild(item); 								  // Agregar el elemento al contenedor




//Agregar varios elementos a un fragmento y luego el fragmento al contenedor
const fragmento = document.createDocumentFragment();

for(i=0;i<20;i++){
const item2 = document.createElement("li");   // Crear un elemento <li>
item2.innerHTML=`Item creado numero ${i}`;			  // Agregar un texto al elemento <li> creado
fragmento.appendChild(item2);				  // Agregar el elemento con el texto al fragmento
}

contenedor.appendChild(fragmento);            // Agregar el fragmento al contenedor


// Es mejor no agregar lo elementos directamente al contenedor para no relentizar. Mejor agregarlos todos a un fragmento y luego el fragmento al contenedor






















//Obtener y modificar hijos
	document.write("<h3>Recorrer el listado de hijos</h3>");
	
	const primerHijo = contenedor.firstChild;			// Primer hijo del contenedor
	const ultimoHijo = contenedor.lastChild;			// Ultimo hijo del contenedor
	const primerHijoElemento = contenedor.firstElementChild;    // Primer hijo que es un elemento del contenedor
	const ultimoHijoElemento = contenedor.lastElementChild;		// Ultimo hijo que es un elemento del contenedor
	

	const hijos = contenedor.childNodes;    						 // Retorna la lista de hijos incluido el texto
	const hijosSoloEtiquetas = contenedor.children;                  // Retorna la lista de hijos que son solo las etiquetas HTML


	document.write("<div class='caja'>");
	document.write("Primer hijo del contenedor   -----> " + primerHijo.textContent + "<br>");
	document.write("Ultimo hijo del contenedor   -----> " + ultimoHijo.textContent + "<br>");
	document.write("Primer elemento hijo del contenedor   -----> " + primerHijoElemento.textContent + "<br>");
	document.write("Ultimo elemento hijo del contenedor   -----> " + ultimoHijoElemento.textContent + "<br>");
	document.write("</div><br>");

	document.write("<div class='caja'>");
	document.write("<br><h3>Recorriendo la lista de hijos con contenedor.childNodes</h3><br>");
	for(hijo of hijos){
	document.write(hijo.textContent + "<br>");
	}
	document.write("</div><br>");




	document.write("<div class='caja'>");
	document.write("<br><h3>Recorriendo la lista de hijos con contenedor.children</h3><br>");
	for(hijo of hijosSoloEtiquetas){
	document.write(hijo.textContent + "<br>");
	}
	document.write("</div>");





	document.write("<div class='separador'></div>")
























	//Metodos de Childs

	document.write("<h3>Metodos de los Childs</h3>");

	document.write('<button onclick="Reemplazar()">Reemplazar elementos que tengan el 5</button>')


	function Reemplazar(){

			// Recorrer la lista de Hijos y reemplazar los elementos que contengan en sus texto el '5'	
			for(hijo of hijosSoloEtiquetas){

				if(hijo.textContent.includes("5")){
					const nuevoHijo = document.createElement("P");  			 // Para insertar un elemento hay que crearlo nuevamente
					nuevoHijo.textContent="Nuevo elemento parrafo creado";
					contenedor.replaceChild(nuevoHijo,hijo);					 // Reemplazar el elemento que contenga el texto '5' por un nuevo elemento creado
				}

			}


			// Recorrer la lista de hijos y mostrarlos en pantalla
			document.write("<div class='caja'>");
			for(hijo of hijosSoloEtiquetas){
				document.write(hijo.textContent + "<br>");
			}
			document.write("</div>");

	}


document.write("<div class='separador'></div>");


















	//Metodos Siblings (hermanos)

	document.write("<h3>Metodos Siblings (hermanos)</h3>");
	document.write("<p>Mostrar los hermanos del item 10</p>");

	document.write("<div class='caja'>");
			for(hijo of hijosSoloEtiquetas){
				if(hijo.textContent.includes("10")){
					document.write("<b>Elemento previo al item 10: </b><u>" + hijo.previousSibling.textContent + "</u><br>");
					document.write("<b>Item 10: </b><u>" + hijo.textContent + "</u><br>");
					document.write("<b>Elemento posterior al item 10: </b><u>" + hijo.nextSibling.textContent + "</u><br>");
					
				}else{
				
				}
			}
			document.write("</div>");



			