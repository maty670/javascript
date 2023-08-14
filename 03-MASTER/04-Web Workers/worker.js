let i=0;

// Al recibir un mensaje => Ejecutar la funcion setInterval con el texto del mensaje
addEventListener("message",e=>{
			
			const seg = parseInt(e.data);
			if(Number.isInteger(seg)){

					console.log(`Iniciando proceso en segundo plano durante ${seg} segundos...`);

		
					// Ejecutar una promesa que no hace nada y tarde n segundos enviados en el parametro
					var promise1 = new Promise(function(resolve, reject) {
				   		 setTimeout(()=>{ 
				   		 	resolve();}, 1000 * seg);
					})



					// Una vez que se ejecuta la promesa devolver un mensaje
					Promise.all([promise1]).then(function() {
					  function d(){
					     postMessage(true);	// Mensaje de respuesta del worker
					  }
					  d(); 
					})


			}else{
				postMessage(false);
			}
				
		
})



