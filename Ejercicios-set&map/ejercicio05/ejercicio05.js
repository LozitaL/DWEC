function arrsinrepes(a){
    return [...new Set(a)];
}

function contenido(param1,param2){
 return [...new Set(param1).intersection(new Set(param2))]
}

let a = [1,2,3,4,4,4,5,6,1,2];
let b = [1,2,6,8,9,4,4];
let c = [];
c = contenido(arrsinrepes(a),arrsinrepes(b));
console.log(c);