
const sendButton = document.getElementById("enviar-nota");





sendButton.addEventListener("click",()=>{
	let resultado,mensaje;
		try{
			resultado = parseInt(document.getElementById("nota-alumno").value);

				if(resultado<1){
					throw "La nota no puede ser menor a 1"
				}

				if(resultado>10){
					throw "La nota no puede ser mayor a 10"
				}

				if (isNaN(resultado)) { 													//isNan es el error cuando se intenta convertir una letra a entero
					throw "Ingreso un caracter no numerico"
				}




		}catch(error){
			mensaje = error
		}

		abrirModal(mensaje);
})


const abrirModal=(msg)=>{
	console.log(msg);
}
