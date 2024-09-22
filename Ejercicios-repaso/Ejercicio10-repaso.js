//Ejercicio 10
function numerosparesimparesmultiplosdetres(){
    let npar = 0;
    let nimpar = 0;
    let multi3 = 0;

    let numero = 0;


    while(numero != -1){
    numero = prompt("Nùmero (-1 para terminar el programa): ");
        if(parseInt(numero)% 3 == 0){multi3++};
        numero.split();
        for (let i = 0; i < numero.length; i++) {
            if(numero[i] % 2 == 0){
                npar ++;
            }else{
                nimpar++
            }
        }
        alert("Digitos pares: "+ npar+"\nDigitos impares: "+nimpar);
        npar = 0;
        nimpar = 0;
    }
    alert("Se ingresaron "+ multi3 +" multiplos de 3");
}
numerosparesimparesmultiplosdetres();