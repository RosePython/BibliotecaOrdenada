function descargar(){
    window.location.href = '../Libros/1984 - George Orwell.pdf';
}

function sucursales(){
    window.location.href = '../Html/sucursales.html';
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

// redireccion a traves del buscador

const campo = document.getElementById('campo');

campo.addEventListener('click', function () {
  // redireccion
  window.location.href = './buscador.html';
});

