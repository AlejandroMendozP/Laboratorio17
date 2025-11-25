function cargarMensaje(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        resolve("Mensaje cargado");
    }, 1000);
})
}

cargarMensaje()
.then(resultado =>{
    console.log(resultado);
})
.catch(error=>{
    console.log("Error:", error);
});