"use strict";
/*Crear estructura de datos que almacene la tabla de clasificiación de una liga local de fùtbol con estos datos:
la liga la disputan 10 equipos.
para cada equipo necesitas:
nombre
puntos
partidos jugados,perdidos,ganados,empatados,
goles a favor y goles en contra
*/

// ejemplo: let equipo = ["nombre",puntos(partidos[]),jugados[ganados[goles+, gole-],perdidos[goles- , goles+],empadatados[goles,goles]]];

function puntos(goles){
let a = [];
a = goles;
if(a[1] > 0) return a[1]*2; 
if(a[2] > 0) return 0;
if(a[3] > 0) return a[3];
}



function formarequipos(n){
    let equipos=[];
    let nombre = "";
    let goles = [0,0];
    let partidos = [];
    let puntos = [];
    for(i = 0; i < n ; i++){
        nombre = prompt("Dime el nombre del equipo");
        
        
     }
}