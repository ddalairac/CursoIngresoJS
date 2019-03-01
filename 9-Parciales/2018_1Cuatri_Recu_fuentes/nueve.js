function mostrar() {

    var marca; // srting 
    var tamaño; // num
    var precio; // num
    var incremento;
    var continuar;
    var mensaje;

    var precioMayorMarca;
    var precioMayortamaño;
    var precioMayor;
    var precioMenor;
    var suma;
    var promedio;
    var cantMasDe2000;
    var marcaPrimeroValor1000;
    var precioUltimoLG;

    precioMayor = 0;
    incremento = 0;
    totalCelulares = 5;
    suma = 0;
    cantMasDe2000 = 0;

    while (incremento < totalCelulares) {
        marca = prompt("Ingrese la marca del celuar");

        tamaño = prompt("Ingrese el tamaño");
        tamaño = parseInt(tamaño);
        while (tamaño < 0 && tamaño > 10) {
            tamaño = prompt("Error, ingrese el tamaño");
            tamaño = parseInt(tamaño);
        }

        precio = prompt("Ingrese el precio");
        precio = parseInt(precio);
        while (precio < 0 && precio > 10000) {
            precio = prompt("Error, ingrese el precio");
            precio = parseInt(precio);
        }

        // Mayor
        if (incremento == 0) {
            precioMayor = precio;
        } else {
            if (precio > precioMayor) {
                precioMayor = precio;
                precioMayorMarca = marca;
                precioMayortamaño = tamaño;
            }
        }

        // Suma
        suma += precio;

        // cantidad mayores a 200
        if (precio > 2000) {
            cantMasDe2000++;
        }

        // precio mas bajo
        if (incremento == 0) {
            precioMenor = precio;
        } else {
            if (precio < precioMenor) {
                marcaMasBarato = marca;
            }
        }


        // primer celular en valer 1000
        if (precio == 1000 && !marcaPrimeroValor1000) {
            marcaPrimeroValor1000 = marca;
        }

        // precio ultimo celular LG
        if (marca == "LG") {
            precioUltimoLG = precio;
        }

        incremento++;
    }
    // Promedio
    promedio = suma / incremento;

    document.write(
        "1- El mayor precio es " + precioMayor + " marca:" + marca + "<br>" +
        "2- Promedio: " + promedio + "<br>" +
        "3- cantidad de mas de 2000: " + cantMasDe2000 + "<br>" +
        "4- El mayor precio es " + precioMayor + " marca:" + marca + " tamaño:" + tamaño + "<br>" +
        "5- marcaMasBarato: " + marcaMasBarato + " valor: " + precioMenor + "<br>" +
        "6- marcaPrimeroValor1000: " + marcaPrimeroValor1000 + "<br>" +
        "7- precioUltimoLG: " + precioUltimoLG + "<br>"
    )
}