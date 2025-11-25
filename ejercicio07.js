try{
    let x = null;
    console.log(x.nombre);
}
catch(error){
    if (error instanceof TypeError){
        console.log("La variable es un null");
        console.log(error.message);
    }
    else if (e instanceof SyntaxError) {
        console.log("Código mal escrito");
        console.log(e.message);
    }
    else {
        console.log("Ocurrio un error");
        console.log(e.message);
    }
}