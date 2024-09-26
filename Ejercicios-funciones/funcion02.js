function juegodados() {
  let numaleatoriopc =0;
  let dado1 = 0;
  let dado2 = 0;
  let jugar = "si";
  let ganado = 0;
  let perdido = 0;


  do {
    numaleatoriopc = parseInt(Math.random()*12+1);
    document.write("El ordenador saco: "+numaleatoriopc+"<br>");
    dado1 = Math.random()*6+1;
    dado2 = Math.random()*6+1;

    let dadot = dado1 + dado2;
    document.write("Has sacado "+parseInt(dadot)+"<br>");
    if (numaleatoriopc > dadot) {
        ganado++;
    }else{perdido++}

    jugar = prompt("¿Quieres seguir jugando? si/no");
  } while (jugar == "si");
  document.write("Has ganado "+ganado+" veces\n <br>Has perdido "+perdido+" veces");
}
juegodados()