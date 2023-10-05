// Array de objetos con todos los libros
let libros = [
  {
    nombre: "1984",
    imagen: "1984.png",
    escritor: "Pepito Apellido1",
    estrellas: 4,
    genero: "ejemplo",
    editorial: "ejemplo",
    libro: "1984 - George Orwell.pdf",
    resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
  },
  {
    nombre: "CSS",
    imagen: "LIBRO1.jpg",
    escritor: "Pepito Apellido2",
    estrellas: 3,
    genero: "ejemplo",
    editorial: "ejemplo",
    libro: "CSS.pdf",
    resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
  },
  {
    nombre: "Eloquent JavaScript",
    imagen: "LIBRO2.jpg",
    escritor: "Pepito Apellido3",
    estrellas: 5,
    genero: "ejemplo",
    editorial: "ejemplo",
    libro: "Eloquent JavaScript.pdf",
    resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
  },
  {
    nombre: "JavaScript ES6",
    imagen: "LIBRO3.jpg",
    escritor: "Pepito Apellido4",
    estrellas: 1,
    genero: "ejemplo",
    editorial: "ejemplo",
    libro: "JavaScript ES6.pdf",
    resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
  },
  {
    nombre: "JavaScript Inspirate",
    imagen: "LIBRO4.jpg",
    escritor: "Pepito Apellido5",
    estrellas: 2,
    genero: "ejemplo",
    editorial: "ejemplo",
    libro: "JavaScript Inspirate.pdf",
    resumen: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam unde nemo laboriosam iusto alias dolorem corrupti porro quasi accusantium! Dolor modi repellat magnam reprehenderit ab facilis accusantium inventore vitae deserunt."
  },
  
]

function buscador () {
  // eliminamos las filas en caso de ya haber usado el buscador
  document.getElementById("registro").innerHTML = '';

  // tomamos lo que ingresa el usuario quitando espacios en blanco al principio y final 
   var palabraUsuario = document.getElementById("campo").value.trim();
  //  guardamos el tamaño de lo ingresado
   var tampalabraUsuario = palabraUsuario.length;
  //  con el for vamos recorriendo el array de objetos 
   for(indice in libros){
    //tomamos el nombre del primer libro
    var nombre = libros[indice].nombre;
    //en str guardamos el nombre del libro pero solo tomando desde la primer letra (0) hasta el tamaño del string que ingreso el usuario. EJEMPLO libro JavaScript Inspirate
    //  el usuario ingresa tres letras eso .length da 3. Asique en esa variable str se guarda jav
    var str = nombre.substring(0,tampalabraUsuario);
    // aca comparamos que lo ingresado por el usuario no sea mas largo que el titulo del libro ni que no haya letras tanto en lo ingresado por el usuario como en el .nombre del objeto
    if(tampalabraUsuario <= nombre.length && tampalabraUsuario != 0 && nombre.length != 0){
      // igualamos ambos a minuscula para compararlas y asi ir creando los elementos html y dando valor a lo que corresponde (los td)
      if(palabraUsuario.toLowerCase() == str.toLowerCase()){
        var fila = document.createElement("tr");
        var columna1Fila = document.createElement("td");
        var columna2Fila = document.createElement("td");
        var columna3Fila = document.createElement("td");
        var columna4Fila = document.createElement("td");
        var nombrefila = document.createTextNode(libros[indice].nombre);
        columna1Fila.appendChild(nombrefila);
        var generofila = document.createTextNode(libros[indice].genero);
        columna2Fila.appendChild(generofila);
        var escritorfila = document.createTextNode(libros[indice].escritor);
        columna3Fila.appendChild(escritorfila);
        var editorialfila = document.createTextNode(libros[indice].editorial);
        columna4Fila.appendChild(editorialfila);
        // agrego a la fila las columnas
        fila.appendChild(columna1Fila);
        fila.appendChild(columna2Fila);
        fila.appendChild(columna3Fila);
        fila.appendChild(columna4Fila);
        // aagregamos al tbody la fila con sus columnas con los datos que corresponden
        document.getElementById("registro").appendChild(fila);
       }
    }
  }
  
}













/*apertura de menu avatar*/
function abrirMenu() {
    var opcionesMenu = document.getElementById("opcionesMenu");
    opcionesMenu.style.display = (opcionesMenu.style.display === "block") ? "none" : "block";
}

// redirigir a la vista Index
const logo = document.getElementById('logo');

logo.addEventListener('click', function (){
  // redireccion
  window.location.href = '../index.html';
});