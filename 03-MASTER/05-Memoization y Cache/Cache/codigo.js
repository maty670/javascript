const archivos = [
	'index.html',
	'estilo.css',
	'codigo.js'
];

caches.open("archivos-estaticos").then(cache=>{
	cache.addAll(archivos);
})