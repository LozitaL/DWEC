"use strict"
let asistentes = new Map();
let actividades = new Map([["truco",["Truco o trato",10,true]]]);


//____________
inscribirse("momia");
participar("momia");
console.log(asistentes);
console.log(actividades);

function actualizarCupo(actividad){
    actividades.get(actividad)[1]--;

    if(actividades.get(actividad)[1] == 0){
        actividades.get(actividad)[2] == false;
    }
}
function actividadDisponible(actividad){
    return actividades.get(actividad)[2];
}

function inscribirse(disfraz,actividad=[]){
    if(asistentes.has(disfraz)){
        alert("Ya existe un asistente con ese disfraz");
        //mostrar disponibles
    }else{
        asistentes.set(disfraz,new Set());
    }
}

function participar(disfraz){
let listado = "";
for(let i of actividades.keys()){
    listado += i+", ";
}
let option = prompt(`Elije una actividad de : ${listado}`);
if(actividadDisponible(option)){
    asistentes.get(disfraz).add(option);
    actualizarCupo(option);
}else{
    alert("Ya esta completa o ya estas inscrito");
}

}