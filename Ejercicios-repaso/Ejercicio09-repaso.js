//Ejercicio 9
function calificaciones(){
    let control = "";
    let aprovados = 0;
    let nalumnos= 0;
    let nota = 0.0;
    let notaaprov = 0.0;
    control = prompt("¿Analizar calificaciones?")
    while(control == "S"){
        nota = parseFloat(prompt("Calificación de un alumno"));
        nalumnos++;
        if(nota >= 4){
            aprovados++;
            notaaprov += notaaprov;
        }
        control= prompt("¿Continuar? S para 'si'");
    }

    let porceaprov = (aprovados/nalumnos)* 100;
    if(aprovados > 0){
    let promedio = nota/aprovados;
    alert("Porcentaje de alumnos aprobados: " + porceaprov + " %\n"
        +"Promedio de los aprobados: "+ promedio );
    }else{alert("no hay alumnos aprobados")}


}
calificaciones();