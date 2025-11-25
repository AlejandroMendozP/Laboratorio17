function cargarUsuario(callback){
    let tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;
    const usuario = {
        nombre: "Alejandro Mendoza",
        ID: "001",
    };
    console.log("Cargando datos usuario");
    setTimeout(()=>{
        callback(usuario);
    }, tiempo);
}

cargarUsuario(usuario=>{
    console.log("Usuario cargado: "+usuario.nombre+" (ID: "+usuario.ID+")");
})