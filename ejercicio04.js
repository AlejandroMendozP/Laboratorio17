try {
    const texto = '{"a": 1 "b": 2}';  
    const resultado = JSON.parse(texto);
    console.log(resultado);

} catch (e) {
    console.log("Error name:", e.name);
    console.log("Error message:", e.message);
}