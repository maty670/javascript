
/*const crearCookies = (name,value,dias,path)=>{

	// Setear la fecha de expiracion a los dias pasados como parametro
	let fecha = new Date();
	fecha.setTime(fecha.getTime()+dias*1000*60*60*24);
	expires = fecha.toUTCString();

	//Si no se utiliza el 'expires', la expiracion por defecto sera de sesion
	document.cookie = `${name}=${value};expires=${expires};path=${path}`;
}*/




const crearCookie = (name,value)=>{
	document.cookie = `${name}=${value}`;
}


const obtenerCookie = (cookieName)=>{
	let cookies = document.cookie;					// Obtenemos el listado de las cookies   ====>	document.cookie devuelve: ('name=value';' name=value';' name=value') co n espacios en algunos datos

	cookies = cookies.split(";");					// Split divide un string en sub-cadenas segun un parametros, retorna un array: ([name=value][ name=value][ name=value]) 
	
	for(let i=0;i<cookies.length;i++){
		let cookie = cookies[i].trim();				// Trim elimina los espacios en blanco al inicio y al final de un string
		if(cookie.split("=")[0]==cookieName){		// Separar el string (name=value) por '=' retornando un array, y luego tomamos elemento 0 del par ([name][value]) es igual al cookieName
			return cookie.split("=");				// Retornamos el array con el par ([name][value]);
		}
	}

		return false;

}



//Crear una cookie
const btnCrear = document.getElementById("btnCrear");
btnCrear.addEventListener("click",()=>{
	const nombre = document.getElementById("nombre").value;
	const valor = document.getElementById("valor").value;

	crearCookie(nombre,valor);
})


//Borrar una cookie
const btnBorrar = document.getElementById("btnBorrar");
btnBorrar.addEventListener("click",()=>{
	const nombre = document.getElementById("nombreBorrar").value;

	if(!obtenerCookie(nombre)){
		console.log("No se encontro la cookie");
	}
	else{
		document.cookie = `${nombre}=0;max-age=0`;
		console.log(`La cookie '${nombre}'' fue borrada`);
	}
	
})




