// localstorage almacena los elementos aun despues de cerrar la pagina 
// sessionStorage borra los elementos luego de cerrar la pagina



localStorage.setItem("nombre","Pedro"); 
sessionStorage.setItem("nombre","Juan");


let nombre = localStorage.getItem("nombre");
console.log(nombre);