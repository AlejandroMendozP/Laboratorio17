function funcion3(){
    try{
        console.log(x);
    }
    catch(error){
        console.log("Nivel 2 atrapó el error: "+error.message);
        throw error;
    }
}

function funcion2(){
    try{
        funcion3();
    }
    catch(error){
        console.log("Nivel 1 recibió el error: "+error.message);
        throw error;
    }
}

function funcion1(){
    try{
        funcion2();
    }
    catch(error){
        console.log("ERROR FINAL capturado en el nivel superior: "+error.message);
    }
}

funcion1();