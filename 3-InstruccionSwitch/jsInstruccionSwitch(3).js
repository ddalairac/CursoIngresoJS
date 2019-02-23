function mostrar() {
    //tomo la edad  
    var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case "Febrero":
            alert(" Este mes no tiene más de 29 días.");
            break;

        default:
            alert("Este mes tiene 30 o más días");
            break;
    }



}//FIN DE LA FUNCIÓN

/* 
si es Febrero: " Este mes no tiene más de 29 días." 
si NO es Febrero: "Este mes tiene 30 o más días" */