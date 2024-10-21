function addproducto(){
    let nproductos = parseInt(prompt("¿Cuantos productos va a añadir?"))
    let map1 = new Map();
    let value = 0;
    let producto = "";
    let cantidad = 0;

    for(i = 0; i < nproductos ; i++){
        value = parseInt(prompt("Codigo"));
        producto = prompt("Nombre del producto");
        cantidad = parseInt(prompt("¿Cuantas existencias tienes?"));
        
        if(map1.has(value)){
            alert("Este codigo ya tiene un producto asociado")
            i = i-1;
        }
            else{ map1.set(value,[producto,cantidad])}
        if(!map1.has(value)){
            if(map1.has(producto)) {
                alert("Este producto ya ha sido añadido"); 
                i = i-1;
            }
            else{ map1.set(value,[producto,cantidad])}
        }
    }
    return map1;
}
function modproducto(map1){
    alert("Modificar producto");
let value = parseInt(prompt("Codigo del producto"));
let proc = prompt("Nombre del producto:");
let cant = parseInt(prompt("cantidad:"));
return map1.set(value,[proc,cant]);
}
function obtproducto(map1){
    alert("mostrar producto")
let value = parseInt(prompt("codigo producto"));
return map1.get(value);
}

let maptienda = new Map();
maptienda = addproducto();
console.log(obtproducto(maptienda));
modproducto(maptienda);
