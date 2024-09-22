//Ejercicio 7
function tipopizza() {
    let ingredientesv = ["Pimiento", "Tofu"];
    let ingredientesnv = ["Peperoni", "Jamón", "Salmón"];

    let pizza = ["Mozzarella", "tomate"];
    let si = 0;
    tipo = prompt("¿Que pizza quieres? Vegana/No vegana")

    while (si == 0) {

        if (tipo == "Vegana" || tipo == "vegana") {
            let ingredientes = ingredientesv.join(", ");
            let eleccion = prompt("Elije un ingrediente de estos: " + ingredientes);
            pizza.push(eleccion);
            pizza.unshift("Vegana");
            return pizza;

        } else if (tipo == "No vegana" || tipo == "no vegana") {
            let ingredientes = ingredientesnv.join(", ");
            let eleccion = prompt("Elije un ingrediente de estos: " + ingredientes);
            pizza.push(eleccion);
            pizza.unshift("No Vegana");
            return pizza;

        } else { 
            alert("No escribiste bien el tipo") 
            tipo = prompt("¿Que pizza quieres? Vegana/No vegana")
        }
    }
}

alert("Bienvenido a Bella Napoli");
let pizza = [];
pizza = tipopizza();

alert(pizza.join(", "));