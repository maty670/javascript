//--------------------XMLHTTPRequest, Peticiones---------------------------------------
// AJAX no es soportado por todos los navegadores


let peticion;


// Realizar una peticion
if(window.XMLHttpRequest){
	peticion = new XMLHttpRequest();
}else{
	peticion = new ActiveXObject("Microsoft.XMLHTTP");
}








peticion.addEventListener("load",()=>{					// Cargar la peticion
	if (peticion.status==200){                          // Si la peticion GET se realiza correctamente, el estado es 200 (hay otros codigos de respuesta 300,301,404,403,etc)
	respuesta = peticion.response						// Respuesta por defecto viene Serializada (como un string)
	respuestaDes = JSON.parse(peticion.response); 		// Deserializar respuesta



	console.log("asd" + respuestaDes.data);



	const contenedor = document.querySelector(".container")
	const fragmento = document.createDocumentFragment();
	for(i=0;i<respuestaDes.data.length;i++){
		item = document.createElement("div");
		item.innerHTML += 	`<div class="perfil">
								<div class="id">Id: ${respuestaDes.data[i].id}</div>
								<div class="nombre">Nombre: ${respuestaDes.data[i].first_name}</div>
								<div class="email">Email: ${respuestaDes.data[i].email}</div>
								<div class="avatar"><img src="${respuestaDes.data[i].avatar}"></div>
							</div>`;
		fragmento.appendChild(item);
		}
	contenedor.appendChild(fragmento);
	} 				
})




peticion.open("GET","https://reqres.in/api/users?page=2");

peticion.send();








































let peticionPOST;


// Realizar una peticion
if(window.XMLHttpRequest){
	peticionPOST = new XMLHttpRequest();
}else{
	peticionPOST = new ActiveXObject("Microsoft.XMLHTTP");
}




	peticionPOST.addEventListener("load",()=>{						// Cargar la peticion con POST
	if (peticionPOST.status==201){                        			// Si la peticion POST se realiza correctamente, el estado es 201 (hay otros codigos de respuesta 300,301,404,403,etc)
		respuestaPOST = peticionPOST.response						// Respuesta por defecto viene Serializada
		respuestaDesPOST = JSON.parse(peticionPOST.response); 		// Deserializar respuesta
		console.log(respuestaDesPOST)
		}
	})




peticionPOST.open("POST","https://reqres.in/api/users");

peticionPOST.setRequestHeader("Content-type","application/json;charset=UTF8");

peticionPOST.send(JSON.stringify({
    "name": "Matias",
    "age": "27"
}));
