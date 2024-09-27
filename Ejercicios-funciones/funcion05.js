//Escribir una función llamada contarLetra reciba una frase y  una letra, 
//y muestre por pantalla el número de veces que aparece la letra en la frase.

function contarLetra(frase,letra){
    let numerodeletras = 0;

    for(let i of frase){
        if(i == letra){
            numerodeletras++;
        }
    }
    return numerodeletras;
}

let frase = prompt("dime una frase");
let letra = prompt("dime una letra");


console.log(contarLetra(frase,letra));