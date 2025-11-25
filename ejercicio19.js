async function dividirAsync(a, b){
    console.log("Iniciando tarea...");
    try{
        const resultado = await new Promise((resolve, reject) => {
            setTimeout(() =>{
                if (b === 0){
                reject(new Error("No se puede dividir entre cero"))
            }
            else resolve (a / b);
            }, 1500)
        });
        console.log("División: "+ resultado);
    }
    catch(error){
        console.log(error);
    }
}

dividirAsync(8,0);
dividirAsync(8,4);