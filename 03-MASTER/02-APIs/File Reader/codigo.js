
const archivo = document.getElementById("archivo");

archivo.addEventListener("change",()=>{
	leerArchivo(archivo.files[0]);
})


const leerArchivo = (ar) =>{
	const reader = new FileReader();
	reader.readAsText(ar);

	reader.addEventListener("load",(e)=>{ 	// Si se cargo el archivo, mostrarlo
	console.log(e.currentTarget.result)     // Luego deberia convertirse en un JSON
	})   
}




//-------------------------------------------------------------------------









const URL = document.getElementById("URL");

URL.addEventListener("change",()=>{
	leerArchivoURL(URL.files);
})



const leerArchivoURL = (ar) =>{

	for(let i = 0; i<ar.length; i++){

		const reader = new FileReader();
		reader.readAsDataURL(ar[i]);

		reader.addEventListener("load",(e)=>{ 	
			let newimg = `<img src='${e.currentTarget.result}'>`;
			document.querySelector(".imagenes").innerHTML+=newimg;

		})  
	} 
}