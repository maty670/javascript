caja1 = document.querySelector(".caja1");
caja2 = document.querySelector(".caja2");
caja3 = document.querySelector(".caja3");
caja4 = document.querySelector(".caja4");

const cajas = [
	caja1,
	caja2,
	caja3,
	caja4
];







const verificarVisibilidad = (entries)=>{
	const entry = entries[0];

	if (entry.isIntersecting) {
		console.log(entry.target.textContent);
	}
	
}

const options = {
	// rootMargin: "-30px"
	// 
}
















const observer = new IntersectionObserver(verificarVisibilidad,options)

for (const caja of cajas){
	observer.observe(caja);
}


