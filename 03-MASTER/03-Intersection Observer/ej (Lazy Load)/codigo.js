const proyectos = document.querySelector(".proyectos");


const crearProyecto = (codigo,beneficiario,titulo)=>{
	const proyecto = document.createElement("DIV");
	const cod = document.createElement("H4");
	const benef = document.createElement("H4");
	const tit = document.createElement("P");

	proyecto.classList.add("proyecto");
	cod.classList.add("codigo");
	benef.classList.add("beneficiario");
	tit.classList.add("titulo");

	cod.textContent = codigo;
	benef.textContent = beneficiario;
	tit.textContent = titulo;


	proyecto.appendChild(cod);
	proyecto.appendChild(benef);
	proyecto.appendChild(tit);

	return proyecto;


}



const cargarMasProyectos = (entry)=>{
	if(entry[0].isIntersecting){
		cargarProyectos(1);
	}
}

let contador = 0;
const observer = new IntersectionObserver(cargarMasProyectos);

cargarProyectos = async num =>{
	const request = await fetch("Proyectos.txt");
	const arr = await request.json();

	let tamaño = arr.length;

	for(i = 0; i < num; i++){
		
		if(arr[contador]!=undefined){
			const newProyecto = crearProyecto(arr[contador].Codigo,arr[contador].Beneficiario,arr[contador].Titulo);
			proyectos.appendChild(newProyecto);
			contador++;

			if(i == num-1){
			observer.observe(newProyecto);
			}
		}
		
		else if (proyectos.lastElementChild.id!=="final") {
			let final = document.createElement("H2");
			final.textContent = "Fin de la lista";
			final.classList.add("final");
			final.id="final";
			proyectos.appendChild(final);
		}
	}
	


}



cargarProyectos(4);