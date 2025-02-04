function convertir(){
    const cantidad = document.getElementById('cantidad').value;
    const option = document.getElementById('options').value;    
    
    if (option == "L") {
        const resultadoLitros = cantidad;
        const resultadoGalones = cantidad / 3.79;
        const resultadoBotellas = cantidad * 0.75
        updateInfo(resultadoLitros, resultadoGalones, resultadoBotellas);
    } else if (option == "Gal"){
        const resultadoLitros = cantidad / 3.79;
        const resultadoGalones = cantidad;
        const resultadoBotellas = cantidad * 5.04;
        updateInfo(resultadoLitros, resultadoGalones, resultadoBotellas);
    } else if (option == 'B') {
        const resultadoLitros = cantidad * 0.75;
        const resultadoGalones = cantidad * 0.19;
        const resultadoBotellas = cantidad;
        updateInfo(resultadoLitros, resultadoGalones, resultadoBotellas);
    }

    function updateInfo(resultadoLitros, resultadoGalones, resultadoBotellas) {
        const litrosResult = document.getElementById("litrosResult");
        const galonesResult = document.getElementById("galonesResult");
        const botellasResult = document.getElementById("botellasResult");

        litrosResult.textContent = resultadoLitros;
        galonesResult.textContent = resultadoGalones;
        botellasResult.textContent = resultadoBotellas;
    }
    
}