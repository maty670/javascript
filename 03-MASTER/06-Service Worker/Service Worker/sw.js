// Verificar que se esta instalando el service worker (solo se instala la 1ra vez)
// El service worker aparece instalado en la pestaña aplicacion
// Para borrarlo hay que poner 'Anular Registro'

self.addEventListener("install",e=>{
	//console.log("Instalando service worker");
})


// Verificar que el service worker esta activo
self.addEventListener("activate",e=>{
	//console.log("El service worker esta activo");
})


// Verificar que se este enviando una solicitud a este Service Worker
// Cada vez que el usuario realize una peticion, esta se intercepta con el EventListener
self.addEventListener("fetch",e=>{
	//console.log("Peticion interceptada por el Service Worker")
})



self.addEventListener("message",e=>{
	console.log("Mensaje recibido del navegador:" + e.data);
	e.source.postMessage("Mensaje de respuesta del service worker");
})