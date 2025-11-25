async function cargarUsuario(){
    console.log("Iniciando tarea...");
    let tiempo = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;
    const usuario = {
        nombre: "Alejandro Mendoza",
        ID: "001",
    };
    try{
    const resultado = await new Promise((resolve, reject)=>{
            setTimeout(() => {
            if (usuario == null){
                reject("El objeto no existe");
            }
            resolve(usuario);
        }, tiempo);
    });
    console.log("Usuario cargado: "+resultado.nombre+" (ID: "+resultado.ID+")");
}
    catch(error){
            console.log(error);
        }
}

cargarUsuario();