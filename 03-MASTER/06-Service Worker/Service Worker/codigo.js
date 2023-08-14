// Instalar service worker
if(navigator.serviceWorker){
	navigator.serviceWorker.register("sw.js");
}



/* Antes de enviar un mensaje o una peticion, hay que verificar que el Service Worker ya 
   este cargado																	      */

	navigator.serviceWorker.ready.then(res=> res.active.postMessage("Mensaje del usuario"));

	navigator.serviceWorker.addEventListener("message",e=>{
		console.log("Mensaje recibido del Service Worker");
		console.log(e.data);
	})



