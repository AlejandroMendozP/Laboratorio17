const numeros = [3, 8, 12, 5];

function procesarLista(numeros){
    return new Promise((resolve, reject)=>{
        let contador = 0;
        let errorOcurrio = false;

        for (let n of numeros){
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
}

procesarLista(numeros)
.then(resultado=>{
    console.log(resultado);
})
.catch(error=>{
    console.log("Error:", error);
});