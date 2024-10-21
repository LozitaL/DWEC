function addproducto(){
    let nproductos = parseInt(prompt("¿Cuantos productos va a añadir?"))
    let map1 = new map();
    let value = 0;
    let producto = "";
    let cantidad = 0;
    for(i = 0; i < nproductos ; i++){
        value = parseInt(prompt("Codigo"));
        producto = prompt("Nombre del producto");
        cantidad = parseInt(prompt("¿Cuantas existencias tienes?"));
        
        (map1.has(value))? i-1 (console.log("Este codigo ya tiene un producto asociado")) : map1.set(value,[producto,cantidad]);
        if(!map1.has(value)){(map1.has(producto))? i-1 (console.log("Este producto ya ha sido añadido")) : map1.set(value,[producto,cantidad]);}}
    return map1;
}
function modproducto(map1){
let value = parseInt(prompt("Codigo del producto"));
let proc = prompt("Nombre del producto:");
let cant = parseInt(prompt("cantidad:"));
return map1.set(value,[proc,cant]);
}
function obtproducto(map1){
let value = parseInt(prompt("codigo producto"));
return map1.get(value);
}

maptienda = new map();
maptienda = addproducto();
obtproducto(maptienda);
modproducto(maptienda);