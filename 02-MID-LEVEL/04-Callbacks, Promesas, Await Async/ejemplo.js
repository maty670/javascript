const materias =[
	{
		nombre:"Fisica",
		nota:7
	},{
		nombre:"Calculo",
		nota:10
	},{
		nombre:"Base de Datos",
		nota:4
	},{
		nombre:"Quimica",
		nota:9
	},{
		nombre:"Programacion",
		nota:5
	}
]



const materiasHTML = document.querySelector(".materias");






const obtenerMateria = (id)=>{
	return new Promise((resolve,reject)=>{
		materia = materias[id];
		if (materia==undefined) reject("La materia no existe");
		else setTimeout(()=>{resolve(materia)},Math.random()*3000);
	})
}



/*  Sin Await y Async
obtenerMateria(0).then(mat => console.log(mat));
obtenerMateria(1).then(mat => console.log(mat));
obtenerMateria(2).then(mat => console.log(mat));
obtenerMateria(3).then(mat => console.log(mat));
obtenerMateria(4).then(mat => console.log(mat));
*/







const devolverMaterias = async()=>{
	let materia = [];
	for(let i=0;i<materias.length;i++){
		materia[i] = await obtenerMateria(i);
		let newHTMLCode = `
		<div class="materia">
			<div class="nombre">${materia[i].nombre}</div>
			<div class="nota">${materia[i].nota}</div>
		</div>`;

		materiasHTML.innerHTML +=newHTMLCode;
	}
}

devolverMaterias();






