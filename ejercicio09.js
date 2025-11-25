function cargarMensaje(callback){
    setTimeout(()=>{
        console.log("Mensaje cargado");
        callback("Datos cargados");
    }, 1000);
}

cargarMensaje(resultado=>{
    console.log("Callback recibió:", resultado);
});