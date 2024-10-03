function contarOcurrencias(a,b){
let veces = 0;
let c = Array.from(a);

    for(i of c){
        if(i == b){
            veces++;
        }
    }
    return veces;
}
let A = "Buenos dias";
console.log(contarOcurrencias(A,"s"));