let n = prompt("dime cuantos elementos tendra el array");
let a = [];
let b;
let Strings = 0;
let Arrays = 0;
let numeros = 0;
let objetos = 0;
let funciones = 0;

for(i = 0; i < n; i++){
    b = prompt("dime un valor, numero,funcion,string etc");
    let numero =  parseInt(b.match(/\d+/g));
    if (numero){
        b[i] = parseInt(b);
        numeros++;
        break;
    }
    else if(n === ""){
        b[i] = b;
    }
    else if(n )
    
   
    
    


}
console.log(a);