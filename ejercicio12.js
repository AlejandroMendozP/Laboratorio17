const numeros = [3, 8, 12, 5];
let contador = 0;

function procesarLista(numeros, callback){
    for (let n of numeros){
        let tiempo = Math.round(Math.random()*(1500 - 500 + 1) + 500);
        setTimeout(()=>{
            console.log("Procesando "+n);
            contador++;
            if (contador == numeros.length){
            callback("Proceso completado");
        }
        }, tiempo);
    }
}

procesarLista(numeros, resultado=>{
    console.log(resultado);
});