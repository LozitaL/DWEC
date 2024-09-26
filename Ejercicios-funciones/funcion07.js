

function escalera(lineas){
let salida = "";

if(lineas == 1) return 1
else {
for(let i= 1; i <= lineas*2-1; i +=2){
    salida += i+" ";}
    console.log(salida);
    return escalera(lineas-1);
}}

console.log(escalera(5));