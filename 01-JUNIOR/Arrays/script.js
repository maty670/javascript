let cadena ="Primera cadena de texto";
let cadena2="Segunda cadena de texto";
let cadena3="Primera";
let cadena4="texto";
let cadena5="cadena de";

document.write(`<b>Primera cadena:</b> ${cadena} <br>
				<b>Segunda cadena:</b> ${cadena2} <br><br>`);

document.write(`<b>Cadenas Concatenadas:</b>
				${cadena} ${cadena2} <br><br>`);


if(cadena.startsWith(cadena3)){
	document.write(`<b>${cadena}</b> y <b>${cadena3}</b> empiezan igual <br>`);
}

if(cadena.endsWith(cadena4)){
	document.write(`<b>${cadena}</b> y <b>${cadena4}</b> terminan igual <br><br>`);
}

if(cadena.includes(cadena5)){
	document.write(` <b>${cadena5}</b> esta incluido en <b>${cadena}</b>,
				    en la posicion <u>${cadena.indexOf(cadena5)}</u>`);
}

document.write("<br>------------------------------------------------------------------------<br><br>");


























cadena = "<b>Cadena de ejemplo</b>";

resultado = cadena.padStart(80,"rellenoPrincipio-"); //Rellenar la cadena al principio con 'relleno' hasta que sea de 40 caracteres
document.write(`${resultado}<br>`);
resultado = cadena.padEnd(80,"rellenoFinal-"); //Rellenar la cadena al final con 'relleno' hasta que sea de 40 caracteres
document.write(`${resultado}<br>`);
document.write("<br>------------------------------------------------------------------------<br><br>");































cadena = "Cadena de Prueba";
document.write(`Cadena: <b>${cadena}</b> <br>`);



resultado=cadena.split(" ");  //Divide la cadena en un array segun la especificacion

document.write(`Cadena separada por ' ' :<br>`);
for(i=0;i<resultado.length;i++){
	document.write(`<b>Elemento ${i}</b>: ${resultado[i]} <br>`);
}


resultado=cadena.split("a");  //Divide la cadena en un array segun la especificacion

document.write(`<br>Cadena separada por 'a' :<br>`);
for(i=0;i<resultado.length;i++){
	document.write(`<b>Elemento ${i}</b>: ${resultado[i]} <br>`);
}


document.write(`<br><br><br><b>Primeros 11 caracteres de la cadena:</b> ${cadena.substring(0,11)} <br><br>`);   //Mostrar las n primeros caracteres de una cadena

document.write(`<b>Todo a minusculas:</b> ${cadena.toLowerCase()}<br><br>`);
document.write(`<b>Todo a mayusculas:</b> ${cadena.toUpperCase()}<br><br>`);
document.write("<br>------------------------------------------------------------------------<br><br>");
























let items=["item1","item2","item3","item4","item5","item6","item7"];
document.write(`<b>Array Original: <br></b>`)
for(i=0;i<items.length;i++){
	document.write(`<b>Elemento ${i}:</b> ${items[i]} <br>`)
}



let primero = items.shift(); //Saca el primer elemento de la cadena y lo almacena en resultado
document.write(`<br>Sacando primer elemento del array: <b style='color:red'>${primero}</b> <br>`);
let ultimo = items.pop();  //Saca el ultimo elemento de la cadena y lo almacena en resultado
document.write(`Sacando ultimo elemento del array: <b style='color:red'> ${ultimo}</b> <br><br>`);

document.write(`<b>Array luego de remover: <br></b>`)
for(i=0;i<items.length;i++){
	document.write(`<b>Elemento${i}:</b> ${items[i]} <br>`)
}



items.unshift("itemA","itemB");   //Agregar un elemento o varios al principio del array
document.write(`<br><b>Array luego de agregar elementos al principio:</b><br>`)
for(i=0;i<items.length;i++){
	document.write(`<b>Elemento${i}:</b> ${items[i]} <br>`)
}


items.push("itemC","itemD");   //Agregar un elemento al final del array
document.write(`<br><b>Array luego de agregar elementos al final:</b><br>`)
for(i=0;i<items.length;i++){
	document.write(`<b>Elemento${i}:</b> ${items[i]} <br>`)
}


items=items.reverse();
document.write(`<br><b>Array invertido:</b><br>`)
for(i=0;i<items.length;i++){
	document.write(`<b>Elemento${i}:</b> ${items[i]} <br>`)
}


let cadenaItemsConcatenados = items.join(""); //Junta todos los elementos de un array en una sola cadena separados por ""
document.write("Todos los elementos de un array concatenados en una sola cadena"+cadenaItemsConcatenados);