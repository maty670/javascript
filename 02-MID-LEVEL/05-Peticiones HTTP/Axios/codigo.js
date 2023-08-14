// Axios a diferencia de Fetch, NO encapsula la informacion

/*
peticion = axios("https://reqres.in/api/users?page=2");  

 


// La peticion retorna una respuesta que NO esta encapsulada
// Por defecto trabaja con peticiones GET
peticion            		    								
		.then(res=>console.log(res.data));	    		    // NO es necesario convertir el JSON




*/





// ------------------------------------------------------------------Ejemplo------------------------------------------------------------------

peticionGet = document.getElementById("peticionGet");

peticionGet.addEventListener("click",function(){

	f();

	this.removeEventListener('click', arguments.callee);


});







function f(){

const contenedor = document.querySelector(".container");
const fragmento = document.createDocumentFragment();

peticion = axios("https://reqres.in/api/users?page=2"); 
peticion              			 
		.then(res=>{
			for(let i = 0 ; i<res.data.data.length;i++){


				let avatar = res.data.data[i].avatar;
				let nombre = res.data.data[i].first_name;
				let apellido = res.data.data[i].last_name;
				let email = res.data.data[i].email;



				elemento = document.createElement("DIV");
				elemento.innerHTML = `	<div class="container">
											<div class="tarjeta">
												<div class="imagen"><img src="${avatar}"></div>
												<div class="datos">
													<div>
														<div>Nombre</div>
														<div>${nombre}</div>
													</div>
													<div>
														<div>Apellido</div>
														<div>${apellido}</div>
													</div>
													<div>
														<div>Correo</div>
														<div>${email}</div>
													</div>
												</div>
											</div>
										</div>`;
				fragmento.appendChild(elemento);

			}
			contenedor.appendChild(fragmento);
			
		});
}




  			

// ---------------------------------------------------------------------------------------------------------------------------------------------



// Para que trabajar con POST
/*


peticion2 = axios.post("https://reqres.in/api/users",{
			"nombre":"Matias",								// Los datos enviados no hace falta serializarlos. esto ya es un JSON
			"edad": "27"
	});  

 

peticion2            		    								
		.then(res=>console.log(res.data));


*/



// ---------------------------------------------------------------------------------------------------------------------------------------------



// Fetch y Axios con await y async


//Fetch:
const getName = async()=>{

	let peticion = await fetch("informacion.txt");   // fetch devuelve una promesa encapasulada,
	let resultado = await peticion .json();			// Luego hay que convertirla a un JSON

	document.querySelector(".container").innerHTML =  `Nombre: ${resultado.nombre} <br> 
													   Edad: ${resultado.edad}`;
}

const obtenerNombreFetch = document.getElementById("obtenerNombreFetch").addEventListener("click",getName);




// Axios
const getNameAxios = async()=>{

	let resultado = await axios("informacion.txt");   
	document.querySelector(".container").innerHTML =  `Nombre: ${resultado.data.nombre} <br> 
													   Edad: ${resultado.data.edad}`;

}

const obtenerNombreAxios = document.getElementById("obtenerNombreAxios").addEventListener("click",getNameAxios);







