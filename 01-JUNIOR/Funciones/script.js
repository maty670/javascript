
let fruta = ["Banana","Naranja","Pera","Sandia","Melon"]; 


let frutaSeleccionada=prompt("Escriba la fruta que quiera seleccionar");

nombreFuncion(fruta,frutaSeleccionada);

function nombreFuncion(fruta,frutaSeleccionada){
	for(f of fruta){
		if(f==frutaSeleccionada){
			alert(`Usted selecciono: ${f}`);
			return;
		}
	}
	
	alert("No hay una fruta con ese nombre");

}