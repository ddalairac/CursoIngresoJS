function mostrar() {
    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case "Febrero":
            alert("tiene 28 días.");
            break;

        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Septiembre":
        case "Noviembre":
        case "Diciembre":
            alert("tiene 31 días.");
            break;

        default:
            alert(" tiene 30 días.");
            break;

    }



}//FIN DE LA FUNCIÓN