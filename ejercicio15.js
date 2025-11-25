function dividirAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                reject(new Error("No se puede dividir entre cero"));
            } else {
                resolve(a / b);
            }
        }, 1500);
    });
}

dividirAsync(10, 2)
.then(resultado => {
    console.log("Resultado:", resultado);
})
.catch(error => {
    console.log("Error:", error.message);
});

dividirAsync(10, 0)
.then(resultado => {
    console.log("Resultado:", resultado);
})
.catch(error => {
    console.log("Error:", error.message);
});