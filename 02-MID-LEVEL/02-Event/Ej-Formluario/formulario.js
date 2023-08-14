	
	const nombre = document.getElementById("nombre");
	const email = document.getElementById("email");
	const materia = document.getElementById("materia");
	const enviar = document.getElementById("btn_enviar");
	const resultado = document.getElementById("resultado")





	function validarDatos(){
		let error
		if(nombre.value.length < 5 || nombre.value.length > 40){
			error = [true,"El nombre debe contener entre 5 y 40 caracteres"];
			return error;
		}else if (email.value.length < 5  || 
				  email.value.length > 40 ||
				  email.value.indexOf("@")==-1 ||
				  email.value.indexOf(".")==-1){

			error=["true","El Email es inválido"];
			return error;

		}else if(materia.value.length < 5 || materia.value.length > 40){
			error=["true","Nombre de materia inválida"];
			return error;	
		}else{
			return error=[false,"Inscripción enviada correctamente"];
		}
	}



	enviar.addEventListener("click",function(e){

		e.preventDefault();
		let error = validarDatos();

		if(error[0]){
			resultado.style.color = "red";
			resultado.style.textAlign = "center";
			resultado.textContent = error[1];
		}else{
			if(window.confirm("Confimar la inscripción")){
				resultado.style.color = "green";
				resultado.style.textAlign = "center";
				resultado.textContent = error[1];
			}
		}
	})



