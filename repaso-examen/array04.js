(function(){})
function transformarATipos(a){

    for(let i in a){
        a[i] = typeof a[i];
    }
    return a;
}

console.log(transformarATipos(["a",2,[],true,(function(){})]))