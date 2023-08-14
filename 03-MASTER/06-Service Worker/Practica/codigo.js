// Instalar service worker
if(navigator.serviceWorker){
	navigator.serviceWorker.register("ServiceWorker.js");
}



/* Antes de enviar un mensaje o una peticion, hay que verificar que el Service Worker ya 
   este cargado																	      */


enviar = document.getElementById("btnEnviar");
texto = document.getElementById("texto").value;




	navigator.serviceWorker.ready.then(res=> res.active.postMessage(texto));



navigator.serviceWorker.addEventListener("message",e=>{
	
})



