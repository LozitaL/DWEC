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

function abrirv(){
let nventana = window.open("","","width=800,height=600");
hacergrande(nventana);
}

function hacergrande(nvent){
    nvent.resizeTo(1920,1080);
    alert("ahora el tamaño es" + window.screen.height+ " X " + window.screen.width);
}