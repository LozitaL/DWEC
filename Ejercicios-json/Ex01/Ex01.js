"use strict";
let a = new Map([["uno",[1,2,3]],["dos",[3,2,1]]]);
class Alumno{
    /**
     *
     */
    #nombre;
    aficiones = a;
    constructor(nombre) {
        this.#nombre = nombre;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(n){
        this.#nombre = n;
    }
    
    toJSON(){
        let objeto = {
            nombre: this.#nombre,
            aficiones: [... this.aficiones]
        }
        return objeto;
    }
    toSTRING(){
        return `El alumno ${this.#nombre} tiene las aficiones ${this.aficiones.toSTRING}`;
    } 
}

let alm1 = new Alumno("diego");

console.log(alm1);
console.log(JSON.stringify(alm1));

