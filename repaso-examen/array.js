let array1 = [[1,8],[3,2,2],[3,2,8]];
let n = 0;
for (let i of array1){
    for(let j of i){
       if(j == 8){
        n++;
        break;
       }
    }
}
console.log(n);