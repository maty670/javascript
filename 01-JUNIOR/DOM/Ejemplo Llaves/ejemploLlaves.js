const contenedor = document.querySelector(".flex-container");



function crearLlave(nombre,modelo,precio){

	img = "<img class='llave-img'src='llave.png'>";
	nombre = `<h2>${nombre}</h2>`;
	modelo = `<h3>${modelo}</h3>`;
	precio = `<p>Precio: <b>$${precio}</b></p>`;
	return[img,nombre,modelo,precio];
}

function changeHidden(number){
	document.querySelector(".key-data").value=number;				//changeHidden: Cambia el 'value' del input de la clase 'key-data' por el modeloRandom de la llave enviado por parametro
}


let documentFragment = document.createDocumentFragment();


for(var i=1;i<=20;i++){
	
	let modeloRandom = Math.round(Math.random()*10000);                          //Math.random: Genera un numero aleatorio entre 0 y 9           Math.round: Redondeo
	let precioRandom = Math.round(Math.random()*10+30);                                      
	let llave = crearLlave(`Llave ${i}`,`Modelo: ${modeloRandom}`,precioRandom); //Creo una llave



	let div = document.createElement("DIV");						// Crear un div
	div.addEventListener("click",()=>{changeHidden(modeloRandom)});	// Al hacer click en el div, se ejecuta la funcion changeHidden
	div.tabIndex = i;                                               // Permite marcar el elemento
	div.classList.add(`item-${i}`,`flex-item`);						// Le asigno una clase al div para el modelo de la llave, y una clase general
	div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];		// Agrego al div lo elementos de la llave
	documentFragment.appendChild(div);								// Agrego el div al fragmento
}

	contenedor.appendChild(documentFragment);						// Agrego el fragmento con todos los div al contenedor

	