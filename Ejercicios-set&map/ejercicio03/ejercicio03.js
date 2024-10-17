function arrsinrepes(a){
    return [...new Set(a)];
}

let a = [1,2,3,4,4,4,5];

a = arrsinrepes(a);
console.log(a);