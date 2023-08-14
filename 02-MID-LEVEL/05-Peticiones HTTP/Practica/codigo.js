
const listarCapitulos = async()=>{
	let resultado = await axios("dbz.json");
	resultado = resultado.data;

	console.log(resultado[0].Id);

	const fragmento = document.createDocumentFragment();
	const container = document.querySelector(".container");

	for(let i=0;i<resultado.length;i++){
		let elemento = document.createElement("DIV");
		elemento.innerHTML=`<div class="capitulo">
								<div class="imagen"><img src="${resultado[i].img}"></div>
								<div class="titulo">${resultado[i].Id} - ${resultado[i].Titulo}</div>
								</div>`;
		fragmento.appendChild(elemento);
	}

	container.appendChild(fragmento);


}

btn_listar = document.getElementById("btn_listar").addEventListener("click",()=>{
	listarCapitulos();
})



