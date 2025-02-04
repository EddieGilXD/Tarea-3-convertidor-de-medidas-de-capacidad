function convertir(){
    const cantidad = document.getElementById('cantidad').value;
    const option = document.getElementById('options').value;    
    
    if (option == "L") {
        const resultadoLitros = cantidad;
        const resultadoGalones = parseInt(cantidad / 3.785, 2);
        console.log(resultadoLitros, resultadoGalones);
    } else if (option == "Gal"){
        console.log("es galon")
    } else if (option == 'B') {
        console.log("es botella")
    }

}