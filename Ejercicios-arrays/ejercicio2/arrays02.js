function arrayn(){
    let a = [];
    let n = parseInt(prompt("Dime cuantos datos tiene tu array?"));
    let strg = 0;
    let nun = 0;
    for(i = 0; i < n ; i++){
        let dato = prompt("Dime el valor nº"+i+" puede ser tanto un numero, como un string ");
        let c = parseInt(dato);
        if(!isNaN(c)){
            a[i]= parseInt(c);
            nun++;}
        else{
            a[i] = dato;
            strg++;
        }
       }
       console.log("Hay "+strg+" Strings y "+nun+" numeros");
       return a;
}

let b = arrayn();
console.log(b)
