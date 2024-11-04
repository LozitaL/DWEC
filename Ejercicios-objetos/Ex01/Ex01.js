"use strict"
/*let alumnos = [{nombre:"uno",edad:10},{nombre:"dos",edad:11},{nombre:"tres",edad:25}];
function ordenar(a,b){
   if (a.edad == b.edad){
    if(a.nombre > b.nombre) return a.nombre;
    else if (a.nombre < b.nombre) return b.nombre;
    else return a.nombre;}
    return a.edad-b.edad
}
console.log(alumnos.sort((a,b)=> ordenar(a,b)));

let nombre = ["uno","dos","tres"];
*/

/*
1. 11Equipos de futbol 
    Funciones:
            Clasificacion, por puntos despues por cantidad de goles, y despues por nombre
            Champions, los 4 primeros equipos
            UEFA, equipo 5,6
            Descenso, 3 ultimos
            Goleador, el equipo con mas goles
            MenosGoles, el equipo con menos goles
    Objeto equipo
        Constructor:
            (Nombre,puntos,partidos jugados, partidos empatados, goles a favor, goles en contra)
            getter y setter

*/
class Equipo{
    constructor(Nombre,Puntos,Pj){
        this.nombre = Nombre;
        this.puntos = Puntos;
        this.pj = Pj;
    }
    set sNombre(Nombre){
        this.nombre = Nombre;
    }
    set sPuntos(Puntos){
        this.puntos = Puntos;
    }
    set sPartJ(Pj){
        this.pj = Pj;
    }
    
    get gNombre(){
        return this.nombre;
    }
    get gPuntos(){
        return this.puntos;
        }
    get gPartJ(){
        return this.pj;
    }
}
class Pj{
    constructor(Pg,Gf,Gc){
        this.pg = Pg;
        this.gf = Gf;
        this.gc = Gc;
    }
    set sPganados(Pg){
        this.pg = Pg;
    }
    set sGfavor(Gf){
        this.gf = Gf;
    }
    set sGcontra(Gc){
        this.gc = Gc;
    }

    get gPganados(){
        return this.pg;
    }
    get gGfavor(){
        return this.gf;
    }
    get gGcontra(){
        return this.gc;
    }
}
let partido1 = new Pj(3,4,5);
let Equipo1 = new Equipo("Eq1",10,partido1);

let Equipos = {
    Equipo1,Equipo2,Equipo3,Equipo4,Equipo5,Equipo6,Equipo7,Equipo8,Equipo9,Equipo10,Equipo11,
    Champions: function(){
        let ordenpuntos = [];
        let valor = Object.values(Equipos);
        for(i = 0; valor.length; i++){

            valor[i].gPuntos 
        }
    }
}

