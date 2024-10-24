function asisses(){
    let a = parseInt(prompt("quien eres? 0-1-2"))
    let b = [];
    let c = null;
    for(i = 0; i < sesiones.length; i++){
        c = parseInt(prompt("s1 = 0, s2 = 1, s3 = 2| A que sesion ira?"))
        b += sesiones[c];
    }
    b = [... new Set(b)];
    return nmap1.set(participantes[a],b);
}
function obtasisses(){
    let a = [];
    let b = prompt("dime la id del participante, p1,p2,p3")
    a = nmap1.get(b);
    console.log(`El participante ${b} va a asistir a ${a.length} sesiones`)
}

function nasisses(){
    let a = prompt("¿que sesion? s1,s2,s3")
    let n = 0;
    for(i = 0; i < participantes.length ;i++){
        if(nmap1.has(a)){
            n++;
        }
    }
    console.log(`En la sesion ${a} van ${n} participantes`); 
}

let sesiones = ["s1","s2","s3"];
let participantes = ["p1","p2","p3"];

let nmap1 = new Map();

nmap1 = asisses();
obtasisses();
nasisses();