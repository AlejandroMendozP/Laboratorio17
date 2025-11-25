function cargarUsuario(){
    console.log("Iniciando tarea...");
    let tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;
    const usuario = {
        nombre: "Alejandro Mendoza",
        ID: "001",
    };
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            if (usuario == null){
                reject("El objeto no existe");
            }
            resolve(usuario);
        }, tiempo);
    })
}

cargarUsuario()
.then(usuario => {
    console.log("Usuario cargado: "+usuario.nombre+" (ID: "+usuario.ID+")");
})
.catch(error => {
    console.log(error);
});