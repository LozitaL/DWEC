function agregarIndice(a){
    let c = Array.from(a);
    let n = 0;
    for(i = 0; i < c.length; i++){
        c[i] += n++;
    }
    return c.join("");
}
let A = "patacas";
console.log(agregarIndice(A));