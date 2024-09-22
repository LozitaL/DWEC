//Ejercicio 6
let empleado = prompt("empleado");
let puntuacion = 0.0;
let nivel = 2400;

function aumentarnivel(numero) {
    let aumento = 0.0;
    while (aumento != -1) {
        aumento = parseFloat(prompt("Cuanto aumenta el nivel?"));
        if (aumento == 0.0) {
            alert("No has hecho nada");
        }
        else if (aumento < 0.0) { return numero; }
        else if ((aumento * 10) % 2 !== 0) {
            alert("La puntuacion solo puede aumenta en decimales de 2 (0.2-0.4 ...)");
        } else {
            parseFloat(numero += aumento);
        }
    }

    return numero;
}


function calcularnivel() {
    if (puntuacion < 0) { }
    else if (puntuacion < 1) {
        console.log("Estas en el nivel 0");
        return nivel;
    } else if (puntuacion >= 1) {
        for (let i = 0; i < parseInt(puntuacion); i++) {
            nivel += nivel;
        }
    }
    return nivel;
}

puntuacion = aumentarnivel(parseFloat(puntuacion));
nivel = calcularnivel(parseInt(puntuacion));
console.log(empleado + " tiene de puntuacion = " + puntuacion + " y cobra " + nivel + "€");
alert(empleado + " tiene de puntuacion = " + puntuacion + " y cobra " + nivel + "€");