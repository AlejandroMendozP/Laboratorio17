try {
 let numero = "hola";
 let resultado = numero * 2;
 if (isNaN(resultado)) {
 throw new Error("La operación no es válida");
 }
 console.log("Resultado:", resultado);
} catch (e) {
 console.log("Ocurrió un error:", e.message);
}