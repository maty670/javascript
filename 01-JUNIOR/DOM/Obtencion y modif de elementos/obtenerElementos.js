function validarDatos() {
  var email = document.getElementById("email").value.indexOf("@"); 
  var edad = document.getElementById("edad").value;                   //Obtener el elemento con el id 'nombre' y el valor de este
  var nombre = document.getElementById("nombre").value;               //Obtener el elemento con el id 'nombre' y el valor de este
  submitOK = "true";


  if (nombre.length > 10) {
    alert("El nombre debe tener un maximo de 10 caracteres");
    submitOK = "false";
    return
  } 

  if (isNaN(edad) || edad < 18 || edad > 100) {
    alert("La edad debe ser entre 18 y 100 años");
    submitOK = "false";
    return
  }

  if (email == -1) {
    alert("Email no valido");
    submitOK = "false";
    return ;
  }




  if (submitOK == "true") {
  	email = document.getElementById("email").value;
  	alert(`Nombre: ${nombre}\nEdad: ${edad}\nEmail: ${email}`);


    var parrafos = document.getElementsByClassName("parrafo"); //Obtener todos los elementos de la clase 'parrafo'
    parrafos[0].innerHTML= nombre;
    parrafos[1].innerHTML= edad;
    parrafos[2].innerHTML= email;

    parrafos[0].style.textDecoration = "underline";
    parrafos[1].style.textDecoration = "underline";
    parrafos[2].style.textDecoration = "underline";

    parrafos[0].title="Nombre";
    parrafos[1].title="Edad";
    parrafos[2].title="Email";

    parrafos[0].contentEditable="true";
    parrafos[1].contentEditable="true";
    parrafos[2].contentEditable="true";


    var Elementos = document.getElementsByTagName("p");   //Obtener todos los elementos con etiqueta <p>
      for(var i=0;i<Elementos.length;i++){
        Elementos[i].style.color="blue";
    }

  }
}
