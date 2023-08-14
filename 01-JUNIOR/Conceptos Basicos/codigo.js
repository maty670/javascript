
/*CONST: Es una constante la cual NO cambiara su valor en ningún momento en el futuro.

VAR: Es una variable que SI puede cambiar su valor y su scope es local.

LET: Es una variable que también podra cambiar su valor, pero solo vivirá(Funcionara) en el bloque donde fue declarada.*/


/*Solicitar datos mediante un cuadro de dialogo*/
 nombre = prompt("Nombre ?");
 apellido= prompt("Apellido ?");
 edad = prompt("Edad ?");



/*	Uso de Backticks:  ` Texto ${variable} `	*/
alert(`Nombre: ${nombre}
Apellido: ${apellido}
Edad: ${edad}`);  					
/*Mensaje de alerta*/





/*1ra manera de tratar con un arreglo*/
let persona = [nombre,apellido,edad];

for (i = 0; i<persona.length ; i++) {
    document.write(`<b> ${persona[i]} </b> <br>`);
}
/*-----------------------------------*/



document.write("<br><br><br>");



/*2da manera de tratar con una arreglo*/
let person = {
    no:nombre,
    ap:apellido,
    ed:edad
 };

 document.write(person["no"] + "<br>");
 document.write(person["ap"] + "<br>");
 document.write(person["ed"]);
/*------------------------------------*/




document.write("<br><br><br>");




/*3ra manera de tratar con una arreglo*/
for(p of persona){
    document.write(`${p} <br>`);
}
/*------------------------------------*/