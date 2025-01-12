//propiedades

function goBack() {
    //Devuelve a la ventana previa a la del sitio web
    window.history.back();
  }

function temporizador(){
    alert('Han pasado 5 segundos desde que pulsaste el boton');
}

function ventana(){
    document.getElementById("tamañov").innerHTML = "Tamaño: " +window.screen.height + "px";
}
