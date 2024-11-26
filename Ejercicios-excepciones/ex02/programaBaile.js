"use strict"

class ExcepcionBailesSalon extends Error{
    constructor(message){
        super(message);
        this.name = "ExcepcionBailesSalon"
    }
}
class BailarinNoEncontradoError extends ExcepcionBailesSalon{
    constructor(message){
        super(message);
        this.BailarinNoEncontradoError = "Bailarin no encontrado";
    }
}
class InscripcionInvalidaError extends ExcepcionBailesSalon{
    constructor(message){
        super(message);
        this.InscripcionInvalidaError = "Inscripcion invalida, edad insuficiente";
    }
}

class Baile {
    #nombre
    #dificultad
    constructor(nombre,dificultad) {
        this.#nombre = nombre;
        this.#dificultad = dificultad;
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        if (valor >= 1 && valor <= 5) {
            this._dificultad = valor;  
          } else {
            console.log("La dificultad debe estar entre 1 y 5.");
          }
    }

    

    get dificultad(){
        return this.#dificultad;
    }

    set dificultad(dificultad){
        this.#dificultad = dificultad;
    }

    toString(){
        return `El baile ${this.#nombre} tiene una dificultad de ${this.#dificultad}`;
    }

    toJSON(){
        let objeto = {
            nombre:this.nombre,
            dificultad:this.dificultad
        }
        return objeto;
    }

    static compararDificultad(baile1,baile2){
        if (baile1.dificultad > baile2.dificultad) {
            return `El baile mas dificil es ${baile1.nombre}`;
        }else if(baile1.dificultad < baile2.dificultad){
            return `El baile mas dificil es ${baile2.nombre}`;
        }else{
            return `Los dos bailes tienen la misma dificultad`;
        }
    }
}

function pedirDificultad() {
    let dificultad = parseInt(prompt("Introduce la dificultad (entre 1 y 5):"), 10);

    // Validamos si la dificultad está en el rango 1-5
    while (isNaN(dificultad) || dificultad < 1 || dificultad > 5) {
      dificultad = parseInt(prompt("Dificultad inválida. Por favor, ingresa un valor entre 1 y 5:"), 10);
    }

    return dificultad;
  }


class Salsa  extends Baile{
    constructor(nombre,dificultad,velocidad, nivelDifi) {//no es necesario volver a llamar a los atributos del padre en el constructor
        super(nombre,dificultad);
        this.velocidadSalsa = velocidad;
        this.nivelDifiSalsa = nivelDifi;
    }

    get velocidad(){
        return this.velocidadSalsa;
    }

    set velocidad(velocidad){
        this.velocidadSalsa = velocidad;
    }

    get nivelDifi(){
        return this.nivelDifiSalsa;
    }

    set nivelDifi(nivelDifi){
        this.nivelDifiSalsa = nivelDifi;
    }
    
}

class Tango extends Baile{
    constructor(nombre,dificultad,intensidad, paisOrig) {
        super(nombre,dificultad);
        this.intensidadTango = intensidad;
        this.paisOrigTango = paisOrig;
    }

    get intensidad(){
        return this.intensidadTango;
    }

    set intensidad(intensidad){
        this.intensidadTango = intensidad;
    }

    get paisOrig(){
        return this.paisOrigTango;
    }

    set paisOrig(paisOrig){
        this.paisOrigTango = paisOrig;
    }
}

class Vals extends Baile{
    constructor(nombre,dificultad,compás,estilo) {
        super(nombre, dificultad); //se puede poner directamente el nombre del baile en este caso así porq no va a ver otro nombre
        this.compásVals = compás;
        this.estiloVals = estilo;
    }

    get compás(){
        return this.compásVals;
    }

    set compás(compás){
        this.compásTango = compás;
    }

    get estilo(){
        return this.estiloVals;
    }

    set estilo(estilo){
        this.estiloVals = estilo;
    }
}

class Bailarin {
    #nombre
    #edad
    #nivelExp
    constructor(nombre, edad, nivelExp) {
        this.#nombre = nombre;
        this.#edad = edad;
        this.#nivelExp = nivelExp;
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }

    get edad(){
        return this.#edad;
    }

    set edad(edad){
        this.#edad = edad;
    }

    get nivelExp(){
        return this.#nivelExp;
    }

    set nivelExp(nivelExp){
        this.#nivelExp = nivelExp;
    }

    toString(){
        return `El bailarin ${this.#nombre} tiene ${this.#edad} años y un nivel de experiencia de ${this.#nivelExp}`;
    }
}

class ParejaDeBaile extends Baile{
    bailarin1
    bailarin2
    constructor(bailarin1,bailarin2, nombre,dificultad) {
        super(nombre,dificultad);
        this.bailarin1 = bailarin1;
        this.bailarin2 = bailarin2;
    }

    nivelPareja(){
       let promedio = (bailarin1.nivelExp+bailarin2.nivelExp)/2;
        return promedio;
    }

    toString(){
        let promedio = this.nivelPareja();
        return `El bailarin1 ${this.bailarin1.nombre} tiene ${this.bailarin1.edad} años y el bailarin2 ${this.bailarin2.nombre} tiene ${this.bailarin2.edad} tienen una experiencia promedio de ${promedio}`;
    }

    mostrarBaile(){
        return `Esta pareja esta bailando ${this.nombre} que tiene una dificultad de ${this.dificultad}`;
    }

    toJSON(){
        let objetoPareja = {
            bailarin1:this.bailarin1,
            bailarin2:this.bailarin2,
            nombre: this.nombre,
            dificultad: this.dificultad
        }
        return objetoPareja;
    }
}
function RegistrarBailarin(){
    let a = prompt("Dime el nombre del bailarin");
    let b = parseInt(prompt("Dime la edad del bailarin"));
    let c = pedirDificultad();
    
    if(b >= 12){
         d = new Bailarin(a,b,c);
        return d;

    }else throw InscripcionInvalidaError();

}


let dificultad = pedirDificultad();
let baile1 = new Baile("clacké",dificultad);
dificultad = pedirDificultad();
let baileSalsa = new Salsa("Salsa",dificultad,"medio",5);
dificultad = pedirDificultad();
let baileTAngo = new Tango("Tango",dificultad,"medio","España");
dificultad = pedirDificultad();
let bailesito = new Vals("Vals",dificultad,"Cabezon","ingles");
let bailarin1;
let bailarin2;
try{
     bailarin1 = RegistrarBailarin();
    }
    catch(error){
        console.log(error.InscripcionInvalidaError);

    }
    finally{
        console.log("Ha registrado a los bailarines");
    }
let bailarines = new ParejaDeBaile(bailarin1,bailarin2,"Vals","medio");
console.log(bailarines.nivelPareja());
console.log(bailarines.toString());
console.log(baileTAngo);
console.log(bailesito);
console.log(Baile.compararDificultad(bailesito,baileSalsa));
console.log("=============================");
console.log(bailarines);
console.log(bailarines.nivelPareja());
console.log(bailarines.toString());
console.log(bailarines.mostrarBaile());
let objetoPareja = new ParejaDeBaile("Jesus","ainhoa","Tango","medio");
console.log(objetoPareja);
//aqui cambiamos a JSON cosniguiendo que no pierda informacion
let cambio = JSON.stringify(objetoPareja);
//volvemos a pasarlo a objeto logrando que no pierda info
let vuelta = JSON.parse(cambio);
console.log("Enseña cambio JSON.stringify");
console.log(cambio);
console.log("Muestra vuelta JSON.parse");
console.log(vuelta);



