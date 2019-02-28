
function mostrar() {
}//FIN DE LA FUNCIÓN

function numerosPrimos() {
    var numeroIngresado;
    var numeroAnterior
    numeroIngresado = prompt("Ingrese un numero");
    numeroIngresado = parseInt(numeroIngresado);

    //Si hay alguno que es divisible, rompe el bucle. Ya no es primo 
    for (numeroAnterior = numeroIngresado - 1; numeroAnterior > 1; numeroAnterior--) {

        console.log("numeroAnterior: " + numeroAnterior)
        if (numeroIngresado % numeroAnterior == 0) {
            break;
        }
    }
    // Si no llego a 1, es porque tenia divisores
    if (numeroAnterior == 1) {
        console.log("Es primo: " + numeroAnterior)
    } else {
        console.log("No es primo: " + numeroAnterior)
    }
}
function primosEntre1y100() {
    var numeroAnterior;
    var numerosPrimos;
    var valorMaximo;
    
    valorMaximo = prompt("Ingrese un numero");
    valorMaximo = parseInt(valorMaximo);
    //valorMaximo = 200;

    for (incremento = valorMaximo; incremento > 0 && incremento < valorMaximo+1; incremento--) {
        //console.log(incremento);
        //Si hay alguno que es divisible, rompe el bucle. Ya no es primo 
        for (numeroAnterior = incremento - 1; numeroAnterior > 1; numeroAnterior--) {
            if (incremento % numeroAnterior == 0) {
                break;
            }
        }
        // Si no llego a 1, es porque tenia divisores
        if (numeroAnterior == 1) {
            console.log("Es primo: " + incremento)
        } 

    }
}
function numerosPerfecto() {
    var numeroIngresado;
    var numeroAnterior;
    var suma;
    numeroIngresado = prompt("Ingrese un numero");
    numeroIngresado = parseInt(numeroIngresado);
    suma = 0;

    for (numeroAnterior = numeroIngresado - 1; numeroAnterior > 0; numeroAnterior--) {

        console.log("numeroAnterior: " + numeroAnterior)
        if (numeroIngresado % numeroAnterior == 0) {
            console.log("es divisible: " + numeroAnterior)
            suma += numeroAnterior;
        }
    }
    if (suma == numeroIngresado) {
        console.log("Es perfecto: " + suma + "==" + numeroIngresado)
    } else {
        console.log("No es perfecto: " + suma + "!=" + numeroIngresado)
    }
}


function centroNumerico(){
    var sumaAnteriores;
    var sumaPosteriores;
    var numeroIngresado;
    
    sumaAnteriores=0;
    sumaPosteriores=0;
    numeroIngresado = prompt("Ingrese un numero");
    numeroIngresado = parseInt(numeroIngresado);
    console.log("numeroIngresado: "+numeroIngresado);

    for(i=0;i<numeroIngresado;i++){
        sumaAnteriores += i;   
    }
    console.log("sumaAnteriores: "+sumaAnteriores);
    for(i=numeroIngresado+1;sumaAnteriores>sumaPosteriores;i++){
        sumaPosteriores += i;   
        
          console.log("sumaPosteriores: "+sumaPosteriores);
        if(sumaAnteriores==sumaPosteriores){
            console.log("Es numero magico");
            break;
        }
    }
}