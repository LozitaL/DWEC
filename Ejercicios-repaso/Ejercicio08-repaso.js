//Ejercicio 8
function invertirdig(n){return n.split("").reverse().join("");}
//.split() = convertir string en ["caracter1","caracter2"...]
//.reverse() = invertir Array [...,"caracter2","caracter1"]
//join(Aca poner lo que querais de separacion) = convertir Array en String "caracter2caracter1"
 
let n =prompt("dime un numero");
let ninv =invertirdig(n);
console.log(ninv);