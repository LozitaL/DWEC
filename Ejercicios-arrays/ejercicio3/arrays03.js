function arrayprimo(){
    let a = [];
    let b = parseInt(prompt("dime le tamaño del array"));
    let max = parseInt(prompt("dime el numero maximo aleatorio"));
    for(i = 0; i < b ; i++){
        let num = Math.floor(Math.random()* max)+1;
        while(a[i] == null){
 
        if(num % 2 !== 0){
            a.push(num);
        }
        num = Math.floor(Math.random()* max)+1;
    }
    }
    console.log(a);
    return a;
}
arrayprimo();