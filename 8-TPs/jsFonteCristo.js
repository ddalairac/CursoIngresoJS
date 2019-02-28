/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
var numero;
var contador;
var total;
var xxxx;

function validarNumero() {
    numero = document.getElementById("Numero").value;
    numero = parseInt(numero);
    if (numero > 0 && numero < 101) {
        console.log("Numero valido: " + numero);
    } else {
        console.log("Numero invalido: " + numero);
    }
}
function NumerosPares() {
    validarNumero();
    contador = 0;
    total = 0;
    while (contador < numero) {
        contador = contador + 1;
        if (contador % 2 == 0) {
            console.log("Par: " + contador);
            total = total + 1;
        }
    }
    alert("Total de numeros pares: " + total);
}
function NumerosImpares() {
    validarNumero();
    contador = 0;
    total = 0;
    while (contador < numero) {
        contador = contador + 1;
        if (contador % 2 != 0) {
            console.log("Impar: " + contador);
            total = total + 1;
        }
    }
    alert("Total de numeros impares: " + total);
}
function NumerosDivisibles() {
    validarNumero();
    var divisibles;
    divisibles = "";
    contador = 0;
    total = 0;
    while (contador < 100) {
        contador = contador + 1;
        if (contador % numero == 0) {
            console.log("Divisible: " + contador + "|| cont " + contador + " % num " + numero + " = " + (contador % numero));
            total = total + 1;
            divisibles += contador + " ";
        }
    }
    alert("Del 1-100. Divisibles por " + numero + " = " + total + " | Son:" + divisibles);
}
function VerificarPrimo() {
    validarNumero();
    var divisor;
    divisor = "";
    contador = 2;
    total = 0;
    // total de numeros divisores
    while (contador < numero) {
        if (numero % contador == 0) {
            console.log("Divisible: " + contador + "|| cont " + contador + " % num " + numero + " = " + (contador % numero));
            total = total + 1;
            divisor += contador + " ";
        }
        contador = contador + 1;
    }

    // Sino tiene divisores es primo, si los tiene los informa
    if (total > 0) {
        mensaje = "No es primo. Divisible por: " + divisor;
    } else {
        mensaje = "Es primo";
    }
    alert(mensaje);
}
function NumerosPrimos() {
    validarNumero();
    var primos;
    var totalPrimos;
    var contador2;
    primos = "";
    contador2 = 2;
    total = 0;
    totalPrimos = 0;

    while (contador2 < numero) {
        var divisor;
        divisor = "";
        contador = 2;
        total = 0;
        // total de numeros divisores
        while (contador < contador2) {
            console.log(contador2 + " % " + contador + " = " + contador2 % contador);
            if (contador2 % contador == 0 && contador2 != contador) {
                total = total + 1;
            }
            contador = contador + 1;
        }
        // Sino no tiene divisores es primo, salvo el numero
        if (total == 0) {
            console.log("SI primo " + contador2);
            totalPrimos = totalPrimos + 1;
            primos = primos + contador2 + " ";
        }
        contador2 = contador2 + 1;
    }

    // Si existieron numeros primo se informan
    if (totalPrimos > 0) {
        mensaje = "Hay " + totalPrimos + " numeros primos entre 1 y " + numero + ". Lista: " + primos;
    } else {
        mensaje = "No hay numeros primos  entre 1 y " + numero;
        /* if (numero == 2){
            mensaje = "No hay numeros primos contenidos en el numero 2, ademas de si mismo";
        } else {
            mensaje = "El numero 1 no es primo ni es divisible por otros numeros";
        } */
    }

    alert(mensaje);

}
