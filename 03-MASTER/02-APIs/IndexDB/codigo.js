// Abrir una solicitud de base de datos (si no exixste la crea)
const IDBRequest = indexedDB.open("usuarios",1); 


// Verifica si se tuvo que crear el elemento
// Si ya estaba creada, esto lo ignora
IDBRequest.addEventListener("upgradeneeded",()=>{
	const db = IDBRequest.result;                 			 // Almacenar el resultado de la solicitud de la base de datos
	db.createObjectStore("nombres",{
		autoIncrement: true
	});
	console.log("La base de datos se creo correctamente");
})

// Verifica si se cargo la base de datos
IDBRequest.addEventListener("success",()=>{
	console.log("La base de datos se cargó correctamente");

	añadirObjeto({nombre:"Pedro"});
	añadirObjeto({nombre:"Juan"});
	añadirObjeto({nombre:"Lucas"});
	añadirObjeto({nombre:"Marcos"})

	leerObjetos();

	modificarObjeto(1,{nombre:"A"});
	modificarObjeto(2,{nombre:"B"});
	modificarObjeto(3,{nombre:"C"});
	modificarObjeto(4,{nombre:"D"})
	modificarObjeto(5,{nombre:"E"})
	modificarObjeto(6,{nombre:"F"})

	leerObjetos();

	eliminarObjeto(1);
	eliminarObjeto(3);
	eliminarObjeto(5);
	eliminarObjeto(7);

	leerObjetos();


})

// Verifica si hubo un error en la base de datos
IDBRequest.addEventListener("error",()=>{
	console.log("Hubo un error, no se pudo abrir la base de datos");
})






// Crear objetos
const añadirObjeto = (objeto) =>{
	const db = IDBRequest.result;
	const IDBtransaction = db.transaction("nombres","readwrite");     // (ObjectStore,readonly-readwrite)
	const objectStore = IDBtransaction.objectStore("nombres");


	objectStore.add(objeto);
	IDBtransaction.addEventListener("complete",()=>{
		console.log("Objeto agregado correctamente");
	})
}


// Modificar objetos, parecido a crear (si no existe, lo crea)
const modificarObjeto = (key,objeto) =>{
	const db = IDBRequest.result;
	const IDBtransaction = db.transaction("nombres","readwrite");     // (ObjectStore,readonly-readwrite)
	const objectStore = IDBtransaction.objectStore("nombres");


	objectStore.put(objeto,key);
	IDBtransaction.addEventListener("complete",()=>{
		console.log("Objeto modificado correctamente");
	})
}

// Leer objetos
const leerObjetos = ()=>{
	const db = IDBRequest.result;
	const IDBtransaction = db.transaction("nombres","readonly");     // (ObjectStore,readonly-readwrite)
	const objectStore = IDBtransaction.objectStore("nombres");

	const cursor = objectStore.openCursor();
	cursor.addEventListener("success",()=>{
		if(cursor.result){
			console.log(cursor.result.value);
			cursor.result.continue();
		}else{
			console.log("todos los datos fueron leidos");
		}
	})
}



// Eliminar objetos
const eliminarObjeto = (key) =>{
	const db = IDBRequest.result;
	const IDBtransaction = db.transaction("nombres","readwrite");     // (ObjectStore,readonly-readwrite)
	const objectStore = IDBtransaction.objectStore("nombres");


	objectStore.delete(key);
	IDBtransaction.addEventListener("complete",()=>{
		console.log("Objeto eliminado correctamente");
	})
}

