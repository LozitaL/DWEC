//Ejercicio 1
let edad = prompt("¿Cuantos años tienes?")
for (let i = 0; i <= edad; i++) {
    //alert("nº "+i);
    console.log("nº =" + i);
}

//Ejercicio 2
let numero = prompt("Dime un numero");
for (let i = 0; i <= numero; i++) {
    if (i % 2 != 0) {
        console.log("n =º" + i);
    }
}

//Ejercicio 3
let ntriangulo = prompt("Altura del triangulo");
let linea01 = "";
for (let index = 0; index < ntriangulo; index++) {
    linea01 += "*";
    console.log(linea01);
}

//Ejercicio 4
let nEnt = prompt("Dime un numero");
for (let index = 0; index <= nEnt; index++) {
    let fila = "";
    for (let j = index; j >= 1; j -= 2) {
        fila += j + " " ;
    }
    console.log(fila);
}

//Ejercicio 5
let nprimo = prompt("Dime un numero");
if (nprimo % 2 != 0) {
    console.log("Es primo");
} else {
    console.log("No es primo");
}


