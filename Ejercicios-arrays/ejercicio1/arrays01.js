let array10 = [];
function naleatorios(a){
    a = [];
   for (let i = 0; i < 10; i++) {
    a[i] = Math.floor(Math.random()*11);
   }
   return a;
}
array10 = naleatorios(array10);
console.log(array10);