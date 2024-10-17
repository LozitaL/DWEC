function addproducto(){
    let nproductos = parseInt(prompt("¿Cuantos productos va a añadir?"))
    let map1 = new map();
    let value = 0;
    let producto = "";
    let cantidad = 0;
    for(i = 0; i < n ; i++){
        value = parseInt(prompt("Codigo"));
        producto = prompt("Nombre del producto");
        cantidad = parseInt(prompt("¿Cuantas existencias tienes?"));
        
        (map1.has(value))? i-1:map1.set(value,[producto,cantidad]);
    }
}
function modproducto(){

}
function obtproducto(){

}