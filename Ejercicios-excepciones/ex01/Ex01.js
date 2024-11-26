class ParamExcepcion extends Error{
    constructor(){
        super();
        this.name = "Parametro incorrecto";
    }
}

function suma(a,b){
    if(a === Number && b === Number){
        return a+b;
    }
    else throw new ParamExcepcion();
}

try{
//aca la funcion a realizar
suma("hola",2);
}
catch(error){
    console.log(error.name);
}
finally{

}