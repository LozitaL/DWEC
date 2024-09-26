function dados(){

    let valor1 = 0, valor2 = 0, valor3 = 0, valor4 = 0, valor5 = 0, valor6 = 0;
    let dado1 = 0;
    let dado2 = 0;
    for(i = 1; i <= 1000; i++){
    dado1 = parseInt(Math.random()*6+1);
    dado2 = parseInt(Math.random()*6+1);
    switch (dado1) {
        case 1: valor1++;
        break;
        
        case 2: valor2++;
        break;

        case 3: valor3++;
        break;

        case 4: valor4++;
        break;

        case 5: valor5++;
        break;
        default: valor6++;
            break;
    }   
    switch (dado2) {
        case 1: valor1++;
        break;
        
        case 2: valor2++;
        break;

        case 3: valor3++;
        break;

        case 4: valor4++;
        break;

        case 5: valor5++;
        break;
        default: valor6++;
            break;
    }
} let total = 0;
    let a = 1;
    let b =[valor1,valor2,valor3,valor4,valor5,valor6];
    total = valor1 + (valor2 * 2) + (valor3 * 3) + (valor4 * 4) + (valor5 * 5) + (valor6 * 6); 
    document.write("El total de puntos es:" +total);
    for(i=0;i < 6 ;i++){
        document.write("<br>El numero "+a++ +" salio "+b[i]+"<br>");
    }
}
dados();
