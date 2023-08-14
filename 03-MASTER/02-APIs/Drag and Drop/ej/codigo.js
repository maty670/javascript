const zona = document.querySelector(".zona");
const texturas = document.querySelector(".texturas");




zona.addEventListener("dragover",(e)=>{
	e.preventDefault();
})

for(let i = 1 ; i < texturas.children.length + 1; i++){
	document.querySelector(`.textura${i}`).addEventListener("dragstart",(e)=>{
		cambiarTextura(i,e);
	})
}

const cambiarTextura = (n,e) =>{
	e.dataTransfer.setData("textura",n);
}



zona.addEventListener("drop",(e)=>{
	let n = e.dataTransfer.getData("textura")
	zona.style.background = `url("textura${n}.jpg")`;
})





