/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var primerNumero;
var operador;
var operadorMensaje;
var segundoNumero;
var respuesta;
var resultado;

function comenzar() {
    primerNumero = (Math.floor(Math.random() * 10) + 1);
    segundoNumero = (Math.floor(Math.random() * 10) + 1);
    operador = (Math.floor(Math.random() * 4) + 1);

    switch (operador) {
        case 1:
            operadorMensaje = "suma";
            resultado = primerNumero + segundoNumero;
            break;
        case 2:
            operadorMensaje = "resta";
            resultado = primerNumero - segundoNumero;
            break;
        case 3:
            operadorMensaje = "multiplicacion";
            resultado = primerNumero * segundoNumero;
            break;
        case 4:
            operadorMensaje = "division";
            resultado = primerNumero / segundoNumero;
            break;
    }
    console.log("primerNumero " + primerNumero);
    console.log("segundoNumero " + segundoNumero);
    console.log("operador " + operador+" "+operadorMensaje);
    console.log("resultado " + resultado);

    document.getElementById("PrimerNumero").value = primerNumero;
    document.getElementById("Operador").value = operadorMensaje;
    document.getElementById("SegundoNumero").value = segundoNumero;

}//FIN DE LA FUNCIÓN
function Responder() {
    respuesta = document.getElementById("Respuesta").value;
    if (respuesta == resultado) {
        mensaje = "Ganaste";
    } else {
        mensaje = "Burro! volve a la escuela";
    }
    alert(mensaje);
}//FIN DE LA FUNCIÓN
