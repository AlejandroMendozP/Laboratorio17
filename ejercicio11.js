function dividirAsync(a, b, callback){
    console.log("Haciendo calculo");
    setTimeout(()=>{
        if (b === 0){
            callback(new Error("No se puede dividir entre cero"), null);
        }
        else callback(null, (a/b));
    }, 1500);
}

function callback(error, resultado){
    if (resultado == null){
        console.log(error.message);
    }
    else console.log(resultado);
}

dividirAsync(8,0,callback);