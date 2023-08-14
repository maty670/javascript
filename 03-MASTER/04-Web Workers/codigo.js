// Dedicated Workers permite ejecutar scripts en segundo plano
// El worker no nace del objeto global window

const worker = new Worker("worker.js");

document.querySelector(".iniciarBucle").addEventListener("click",()=>{   // Al hacer click en el boton ejecutar bucle
	const campoTexto = document.getElementById("campoTexto").value;		 // Obtener el elementos del campo de texto
	worker.postMessage(campoTexto);              						 // Manda mensaje al worker
})

		 	 
	worker.addEventListener("message",e=>{
		if(e.data){
			console.log("El proceso en segundo plano finalizo");
			worker.terminate();					 					    // Finalizar la ejecucion del worker
		}else{
			console.log("El caracter no es de tipo numerico");
		} 

		
	})					








//6:35:0