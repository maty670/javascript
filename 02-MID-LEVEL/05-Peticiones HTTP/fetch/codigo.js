// Otra forma de trabajar con el XMLHttpRequest
// Fetch esta basado en promesas, siempre nos devuelve una promesa encapsulada


// Por defecto fetch tiene el metodo GET
peticion = fetch("https://reqres.in/api/users?page=2");  

 


// La peticion retorna una promesa, por lo tanto hay que usar el then
peticion
		.then(res=>res.text())               		    // Retorna la promesa desencapsulada en el formato text (JSON Serializado)
		.then(res=>console.log(res));	    		    // Luego a ese resultado mostrarlo









// Ahora retornado en formato json, y asi evitar Deserializar con JSON.parse
peticion = fetch("https://reqres.in/api/users?page=2"); 
peticion
		.then(res=>res.json())                			 // Retorna la promesa desencapsulada en el formato json (Deserializado)
		.then(res=>console.log(res));	    			 // Luego a ese resultado mostrarlo














// ------------------------------------------------------------------Ejemplo------------------------------------------------------------------
const contenedor = document.querySelector(".container");
const fragmento = document.createDocumentFragment();

peticion = fetch("https://reqres.in/api/users?page=2"); 
peticion
		.then(res=>res.json())                			 
		.then(res=>{
			for(let i = 0 ; i<res.data.length;i++){
				elemento = document.createElement("DIV");
				elemento.innerHTML = `<div class="elemento">
										<div class="avatar"><img src="${res.data[i].avatar}"></div>
											<div class="detalles">
												<div class="id"><h4>Id</h4><p>${res.data[i].id}</p></div>
												<div class="nombre"><h4>Nombre</h4><p>${res.data[i].first_name}</p></div>
												<div class="email"><h4>Email</h4><p>${res.data[i].email}</p></div>
											</div>
										</div>`;
				fragmento.appendChild(elemento);
			}
			contenedor.appendChild(fragmento)
		});	    			

// ---------------------------------------------------------------------------------------------------------------------------------------------

















//          POST

// Ahora retornado en formato json, y asi evitar Deserializar con JSON.parse
peticion = fetch("https://reqres.in/api/users",{
				method:"POST",
				body:`{
						"nombre":"Matias",
						"edad":"27"
						}`,
				headers:{"Content-type":"application/json"}
}); 

peticion
		.then(res=>res.json())                			 // Retorna la promesa desencapsulada en el formato json (Deserializado)
		.then(res=>console.log(res));	    			 // Luego a ese resultado mostrarlo