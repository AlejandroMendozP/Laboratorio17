async function cargarMensaje(){
    console.log("Iniciando tarea...");
    const resultado = await new Promise(resolve => {
        setTimeout(()=>{
        resolve("Mensaje cargado");
    }, 1000);
});
console.log("Async/Await recibió:", resultado);
}

cargarMensaje();