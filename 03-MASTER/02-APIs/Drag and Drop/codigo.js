

const circulo = document.querySelector(".circulo");
const zona = document.querySelector(".zona");


circulo.addEventListener("dragstart",(e)=>{
	e.dataTransfer.setData("clase",e.target.className)
	console.log("Evento dragstart")
})

//circulo.addEventListener("drag",()=>{console.log("Evento drag")});
//circulo.addEventListener("dragend",()=>{console.log("Evento dragend")})


// dragenter: El evento se desencadena cuando un elemento arrastrado o una selección de texto ENTRA en un destino de colocación válido
// dragover: El evento dragover se activa cuando un elemento o texto SE ARRASTRA a un objetivo válido (cada pocos cientos de milisegundos).
// drop : El evento drop se desencadena cuando se coloca un elemento o una selección de texto en un destino de drop válido
// dragleave : El evento se desencadena cuando un elemento arrastrado o una selección de texto deja un destino de colocación válido

zona.addEventListener("dragenter",()=>{
	console.log("Evento dragenter");
})

zona.addEventListener("dragover",(e)=>{
	e.preventDefault();                       // dragover por defecto no deja soltar objetos dentro, por lo que hay que agregarle
	console.log("Evento dragover");			  // el preventDefault() para que el drop funciones
})

zona.addEventListener("drop",(e)=>{
	console.log(e.dataTransfer.getData("clase"));
})

zona.addEventListener("dragleave",()=>{
	console.log("Evento dragleave");
})


