const numeros = [3, 8, -12, 5];

async function procesarLista(lista){
    console.log("Iniciando tarea...");
    let contador = 0;
    let errorOcurrio = false;
    try{
    const resultado = await new Promise((resolve, reject) => {
        for (let n of lista){
            let tiempo = Math.round(Math.random()*(1500 - 500 + 1) + 500);

            setTimeout(()=>{
                if (errorOcurrio) return;

                if (n < 0){
                    errorOcurrio = true;
                    reject("Número negativo no aceptado");
                    return;
                }

                console.log("Procesando " + n);
                contador++;

                if (contador === numeros.length){
                    resolve("Proceso completado");
                }
            }, tiempo);
        }
    });
    console.log(resultado);
}
catch (error){
    console.log(error);
}
}

procesarLista(numeros);