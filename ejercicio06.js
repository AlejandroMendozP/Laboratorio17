function validarEdad(edad){
    try{
        if (edad < 0){
            throw new Error("Edad invalida");}
        else console.log("Edad: "+edad);
    }
    catch (e){
        console.log(e.message);
    }
}

validarEdad(-1);